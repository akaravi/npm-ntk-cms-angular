import { Injectable } from '@angular/core';
import { NodeInterface } from '../interfaces/node.interface';
import { Observable } from 'rxjs';
import { TreeModel } from '../models/tree.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import {
  FileManagerStoreService,
  SET_LOADING_LIST_ID,
  SET_LOADING_STATE,
  SET_PARENT,
  SET_SELECTED_NODE,
} from './file-manager-store.service';
import { BaseService } from './base.service';
import { map } from 'rxjs/operators';
import { FileCategoryModel, FileContentModel, FilterDataModel, FilterModel } from 'ntk-cms-api';

@Injectable({
  providedIn: 'root',
})
export class NodeService extends BaseService {
  get currentParentId(): number {
    return this.privateParentId;
  }

  set currentParentId(value: number) {
    this.privateParentId = value;
  }
  constructor(private http: HttpClient, private store: FileManagerStoreService) {
    super();
    this.loadingListIdLive();
    this.guid = this.newGuid();
    // console.log('constructor', this.guid);

  }
  private guid = '';

  public serviceTree: TreeModel;
  private privateParentId: number;

  loadingListId: number[];
  private S4(): string {
    const ran = (1 + Math.random()) * 0x10000;
    return (ran | 0).toString(16).substring(1);
  }
  newGuid(): string {
    const isString = `${this.S4()}${this.S4()}-${this.S4()}-${this.S4()}-${this.S4()}-${this.S4()}${this.S4()}${this.S4()}`;

    return isString;
  }

  // todo ask server to get parent structure
  public startManagerAt(parentId: number): void {
    this.currentParentId = parentId;
    this.refreshCurrentPath();
  }

  public refreshCurrentPath(): any {
    this.store.setState({ type: SET_PARENT, payload: this.currentParentId });
    this.store.setState({ type: SET_LOADING_STATE, payload: true });
    const children = this.findFolderById(this.currentParentId).children;
    if (!this.loadingListIdCheckAllowRunApi(this.currentParentId)) {
      this.store.setState({ type: SET_SELECTED_NODE, payload: this.serviceTree.nodes });
      this.store.setState({ type: SET_LOADING_STATE, payload: false });
      return;
    }
    this.LoadingListIdAdd(this.currentParentId);

    this.getNodesFolder(this.currentParentId).then(() => {
      this.store.setState({ type: SET_SELECTED_NODE, payload: this.serviceTree.nodes });
      this.getNodesFile(this.currentParentId).then(() => {
        this.store.setState({ type: SET_SELECTED_NODE, payload: this.serviceTree.nodes });
        this.store.setState({ type: SET_LOADING_STATE, payload: false });
        this.loadingListIdRemove(this.currentParentId);
      });
    });
  }

  LoadingListIdAdd(id: number): void {
    if (!this.loadingListId) {
      this.loadingListId = [];
    }
    this.loadingListId.push(id);
    this.store.setState({ type: SET_LOADING_LIST_ID, payload: this.loadingListId });
  }

  loadingListIdRemove(id: number): void {
    if (!this.loadingListId) {
      this.loadingListId = [];
      this.store.setState({ type: SET_LOADING_LIST_ID, payload: this.loadingListId });
      return;
    }
    const index = this.loadingListId.indexOf(id);
    if (index >= 0) {
      this.loadingListId = this.loadingListId.splice(index, 0);
    }
    this.store.setState({ type: SET_LOADING_LIST_ID, payload: this.loadingListId });
  }

  loadingListIdCheckAllowRunApi(id: number): boolean {
    if (!this.loadingListId || this.loadingListId.length === 0) {
      return true;
    }
    const index = this.loadingListId.indexOf(id);
    if (index >= 0) {
      return false;
    }
    return true;
  }

  loadingListIdLive(): void {
    this.store
      .getState((state) => state.fileManagerState.loadingListId)
      .subscribe((data: number[]) => {
        this.loadingListId = data;
      });
  }

  getNodesFolder(parentId: number): any {
    return new Promise((resolve) => {
      return this.getNodesFoldersFromServer(parentId).subscribe((data: Array<NodeInterface>) => {
        const parent = this.findFolderById(parentId);
        data.forEach((x) => parent.children.push(x));
        resolve(null);
      });
    });
  }

  getNodesFile(parentId: number): any {
    return new Promise((resolve) => {
      return this.getNodesFilesFromServer(parentId).subscribe((data: Array<NodeInterface>) => {
        const parent = this.findFolderById(parentId);
        data.forEach((x) => parent.children.push(x));
        resolve(null);
      });
    });
  }

  private getParentPath(path: string): string {
    let parentPath = path.split('/');
    parentPath = parentPath.slice(0, parentPath.length - 1);
    return parentPath.join('/');
  }

  private getNodesFromServerNormal(parentId: number): any {
    let folderId: any = this.findFolderById(parentId).id;
    folderId = folderId === 0 ? '' : folderId;

    return this.http.post(this.serviceTree.config.baseURL + this.serviceTree.config.api.listFile, {
      params: new HttpParams().set('parentPath', folderId),
    });
  }


  private getNodesFilesFromServer(folderId: number): Observable<NodeInterface[]> {
    const filterModel = new FilterModel();
    filterModel.RowPerPage = 100;
    filterModel.SortColumn = 'FileName';
    filterModel.Filters = [];
    const filter = new FilterDataModel();
    filter.PropertyName = 'LinkCategoryId';
    if (folderId > 0) {
      filter.Value = folderId;
    }
    filterModel.Filters.push(filter);

    return this.http
      .post(this.serviceTree.config.baseURL + this.serviceTree.config.api.listFile, filterModel, {
        headers: this.getHeaders(),
      })
      .pipe(
        map((ret) => {
          const data = this.errorExceptionResultCheck<FileContentModel>(ret);
          const retOut: NodeInterface[] = [];
          if (data.IsSuccess) {
            data.ListItems.forEach((x: FileContentModel) => {
              const row = {
                id: x.Id,
                parentId: x.LinkCategoryId,
                CreatedDate: x.CreatedDate,
                UpdatedDate: x.UpdatedDate,
                isFolder: false,
                isExpanded: false,
                name: x.FileName || x.Id,
                downloadLinksrc: x.DownloadLinksrc,
                children: [],
                type: x.Extension,
                size: x.FileSize,
              } as NodeInterface;
              retOut.push(row);
            });
          }
          return retOut;
        }),
      );
  }

  private getNodesFoldersFromServer(folderId: number): Observable<NodeInterface[]> {
    const filterModel = new FilterModel();
    filterModel.RowPerPage = 100;
    filterModel.SortColumn = 'Title';
    filterModel.Filters = [];
    const filter = new FilterDataModel();
    filter.PropertyName = 'LinkParentId';
    if (folderId > 0) {
      filter.Value = folderId;
    }
    filterModel.Filters.push(filter);
    // Category
    return this.http
      .post(this.serviceTree.config.baseURL + this.serviceTree.config.api.listFolder, filterModel, {
        headers: this.getHeaders(),
      })
      .pipe(
        map((ret) => {
          const data = this.errorExceptionResultCheck<FileCategoryModel>(ret);

          const retOut: NodeInterface[] = [];
          if (data.IsSuccess) {
            data.ListItems.forEach((x: FileCategoryModel) => {
              const row = {
                id: x.Id,
                parentId: x.LinkParentId,
                CreatedDate: x.CreatedDate,
                UpdatedDate: x.UpdatedDate,
                isFolder: true,
                isExpanded: false,
                name: x.Title || x.Id,
                downloadLinksrc: '',
                children: [],
              } as NodeInterface;
              retOut.push(row);
            });
          }
          return retOut;
        }),
      );
  }

  public SelectFolderById(parentid: number, loadChild: boolean = false, reLoadChild: boolean = false): NodeInterface {
    const result = this.findFolderByIdHelper(parentid);
    this.store.setState({ type: SET_LOADING_STATE, payload: false });

    if (result === null) {
      return this.serviceTree.nodes;
    }
    if (!loadChild) {
      return result;
    }
    if (reLoadChild) {
      result.children = [];
    }
    if (reLoadChild || !result.children || result.children.length === 0) {
      this.refreshCurrentPath();
    }
    return result;
  }

  public findFolderById(parentid: number): NodeInterface {
    const result = this.findFolderByIdHelper(parentid);
    this.store.setState({ type: SET_LOADING_STATE, payload: false });

    if (result === null) {
      return this.serviceTree.nodes;
    }

    return result;
  }

  public findFolderByIdHelper(id: number, node: NodeInterface = this.serviceTree.nodes): NodeInterface {
    if (node.id === id) {
      return node;
    }

    if (!node.children || node.children.length === 0) {
      return null;
    }
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < node.children.length; i++) {
      const obj = this.findFolderByIdHelper(id, node.children[i]);
      if (obj != null && obj.isFolder) {
        return obj;
      }
    }

    return null;
  }

  public foldRecursively(node: NodeInterface): void {
    if (!node.children || node.children.length === 0) {
      return null;
    }
    node.children.forEach((child) => {
      if (!child.children || !child.children.find((x) => x.isExpanded)) {
        return null;
      }
      this.foldRecursively(child);
      document.getElementById('tree_' + child.id).classList.add('deselected');
      child.isExpanded = false;
    });
  }

  public foldAll(): void {
    this.foldRecursively(this.serviceTree.nodes);
  }
}
