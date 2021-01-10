import { Injectable } from '@angular/core';
import { NodeInterface } from '../interfaces/node.interface';
import { Observable } from 'rxjs';
import { TreeModel } from '../models/tree.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FileManagerStoreService, SET_LOADING_STATE, SET_PARENT, SET_SELECTED_NODE } from './file-manager-store.service';
import { BaseService } from './base.service';
import { map } from 'rxjs/operators';
import { ErrorExceptionResult, FileCategoryModel, FileContentModel, FilterDataModel, FilterModel } from 'ntk-cms-api';

@Injectable({
  providedIn: 'root',
})
export class NodeService extends BaseService {
  public tree: TreeModel;
  private privateParentId: number;
  get currentParentId(): number {
    return this.privateParentId;
  }
  set currentParentId(value: number) {
    this.privateParentId = value;
  }
  constructor(private http: HttpClient, private store: FileManagerStoreService) {
    super();
  }

  // todo ask server to get parent structure
  public startManagerAt(parentId: number): void {
    this.currentParentId = parentId;
    this.refreshCurrentPath();
  }

  public refreshCurrentPath(): any {
    this.findFolderById(this.currentParentId).children = [];
    this.store.dispatch({ type: SET_PARENT, payload: this.currentParentId });
    this.store.dispatch({ type: SET_LOADING_STATE, payload: true });
    // debugger;
    this.getNodesFolder(this.currentParentId).then(() => {
      // debugger;
      this.store.dispatch({ type: SET_SELECTED_NODE, payload: this.tree.nodes });
      this.getNodesFile(this.currentParentId).then(() => {
        // debugger;
        this.store.dispatch({ type: SET_SELECTED_NODE, payload: this.tree.nodes });
        this.store.dispatch({ type: SET_LOADING_STATE, payload: false });
      });
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

    return this.http.post(this.tree.config.baseURL + this.tree.config.api.listFile, {
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
    filter.IntValueForceNullSearch = true;
    filterModel.Filters.push(filter);

    return this.http
      .post(this.tree.config.baseURL + this.tree.config.api.listFile, filterModel, {
        headers: this.getHeaders(),
      })
      .pipe(
        map((ret) => {
          const data = this.errorExceptionResultCheck<FileContentModel>(ret);
          const retOut: NodeInterface[] = [];
          if (data.IsSuccess) {
            data.ListItems.forEach((x) => {
              const row = {
                id: x.Id,
                parentId: x.LinkCategoryId,
                isFolder: false,
                isExpanded: false,
                name: x.FileName || x.Id,
                downloadLinksrc: x.DownloadLinksrc,
                children: [],
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
    filter.IntValueForceNullSearch = true;
    filterModel.Filters.push(filter);
    // Category
    return this.http
      .post(this.tree.config.baseURL + this.tree.config.api.listFolder, filterModel, {
        headers: this.getHeaders(),
      })
      .pipe(
        map((ret) => {
          const data = this.errorExceptionResultCheck<FileCategoryModel>(ret);

          const retOut: NodeInterface[] = [];
          if (data.IsSuccess) {
            data.ListItems.forEach((x) => {
              const row = {
                id: x.Id,
                parentId: x.LinkParentId,
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

  // public findNodeByPath(nodePath: string): NodeInterface {
  //   const ids = nodePath.split('/');
  //   ids.splice(0, 1);
  //   return ids.length === 0 ? this.tree.nodes : {}; // ids.reduce((value, index ) => value.children[index ], this.tree.nodes);
  // }

  // public findNodeById(parentid: number): NodeInterface {
  //   // debugger;
  //   const result = this.findFolderByIdHelper(parentid);

  //   if (result === null) {
  //     console.warn('[Node Service] Cannot find node by id. Id not existing or not fetched. Returning root.');
  //     return this.tree.nodes;
  //   }
  //   return result;
  // }
  public findFolderById(parentid: number, loadChild: boolean = false, reLoadChild: boolean = false): NodeInterface {
    // debugger;
    const result = this.findFolderByIdHelper(parentid);

    if (result === null) {
      console.warn('[Node Service] Cannot find node by id. Id not existing or not fetched. Returning root.');
      return this.tree.nodes;
    }
    if (result.id === 0|| !loadChild) {
      console.log(result);
      return result;
    }
    if (reLoadChild || !result.children || result.children.length === 0) {
      this.refreshCurrentPath();
    }
    console.log(result);
    return result;
  }
  public findFolderByIdHelper(id: number, node: NodeInterface = this.tree.nodes): NodeInterface {
    if (node.id === id) {
      return node;
    }
    // debugger;
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
    // debugger;
    // console.log('folding ', node);
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
    this.foldRecursively(this.tree.nodes);
  }
}
