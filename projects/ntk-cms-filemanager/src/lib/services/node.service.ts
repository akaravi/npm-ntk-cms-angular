import { Injectable } from '@angular/core';
import { NodeInterface } from '../interfaces/node.interface';
import { Observable } from 'rxjs';
import { TreeModel } from '../models/tree.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FileManagerStoreService, SET_LOADING_STATE, SET_PATH, SET_SELECTED_NODE } from './file-manager-store.service';
import { map } from 'rxjs/operators';
import { FileCategoryService, FileContentService } from 'ntk-cms-api';

/*
{
  size: string           // e.g. '3 KB'
  url?: string            // download url
  id: string | number;   // id can be path or database id
  dir: bool              // is current node dir?
  path: string           // path to current item (e.g. /folder1/someFile.txt)
  name?: string          // optional (but we are using id as name if name is not present) (e.g. someFile.txt)
}
https://github.com/Chiff/ng6-file-man-express/blob/master/index.js
*/
// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class NodeService {
  public serviceTree: TreeModel;
  private privatePath: string;

  constructor(
    private http: HttpClient,
    private store: FileManagerStoreService,
    private fileContentService: FileContentService,
    private fileCategoryService: FileCategoryService,
  ) {
    /** GUID */
    this.guid = this.newGuid();
    /** GUID */
    // console.log('NodeService Constructor:', this.guid);
  }
  /** GUID */
  private guid = '';
  private S4(): string {
    const ran = (1 + Math.random()) * 0x10000;
    return (ran | 0).toString(16).substring(1);
  }
  newGuid(): string {
    const isString = `${this.S4()}${this.S4()}-${this.S4()}-${this.S4()}-${this.S4()}-${this.S4()}${this.S4()}${this.S4()}`;
    return isString;
  }
  /** GUID */
  // todo ask server to get parent structure
  public startManagerAt(path: string): void {
    this.currentPath = path;
    this.refreshCurrentPath();
  }
  public refreshCurrentPath_orginal(): void {
    this.findNodeByPath_orginal(this.currentPath).children = {};
    this.getNodes_orginal(this.currentPath).then(() => {
      this.store.dispatch({ type: SET_SELECTED_NODE, payload: this.serviceTree.nodes });
      this.store.dispatch({ type: SET_PATH, payload: this.currentPath });
    });
  }
  public refreshCurrentPath(): void {
    this.findNodeByPath(this.currentPath).children = {};
    this.getNodes(this.currentPath).then(() => {
      this.store.dispatch({ type: SET_SELECTED_NODE, payload: this.serviceTree.nodes });
      this.store.dispatch({ type: SET_PATH, payload: this.currentPath });
    });
  }
  getNodes_orginal(path: string): Promise<Array<NodeInterface>> {
    return new Promise((resolve => {
      this.parseNodes_orginal(path).subscribe((data: Array<NodeInterface>) => {
        for (let i = 0; i < data.length; i++) {
          const parentPath = this.getParentPath(data[i].pathToNode);
          this.findNodeByPath_orginal(parentPath).children[data[i].name] = data[i];
        }
        resolve(null);
      });
    }));
  }
  getNodes(path: string): Promise<Array<NodeInterface>> {
    //console.log('getNodes Run:', this.guid);
    const prosses = 'getNodes';
    this.store.processStart(prosses);
    return new Promise((resolve => {
      this.parseNodes(path).subscribe((data: Array<NodeInterface>) => {
        for (let i = 0; i < data.length; i++) {
          const parentPath = this.getParentPath(data[i].pathToNode);
          this.findNodeByPath(parentPath).children[data[i].id] = data[i];
        }
        this.store.processStop(prosses);
        resolve(null);
      });
    }));
  }
  private getParentPath_orginal(path: string): string {
    let parentPath = path.split('/');
    parentPath = parentPath.slice(0, parentPath.length - 1);
    return parentPath.join('/');
  }
  private getParentPath(path: string): string {
    let parentPath = path.split('/');
    parentPath = parentPath.slice(0, parentPath.length - 1);
    return parentPath.join('/');
  }
  private parseNodes_orginal(path: string): Observable<NodeInterface[]> {
    return new Observable(observer => {
      this.getNodesFromServer_orginal(path).subscribe((data: Array<any>) => {
        observer.next(data.map(node => this.createNode_orginal(path, node)));
        this.store.dispatch({ type: SET_LOADING_STATE, payload: false });
      });
    });
  }
  private parseNodes(path: string): Observable<NodeInterface[]> {
    return new Observable(observer => {
      this.getNodesFromServer(path).subscribe((data: Array<any>) => {

        observer.next(data.map(node => this.createNode(path, node)));
        this.store.dispatch({ type: SET_LOADING_STATE, payload: false });

      });
    });
  }
  private createNode_orginal(path: string, node: any): NodeInterface {
    if (node.path[0] !== '/') {
      console.warn('[Node Service] Server should return initial path with "/"');
      node.path = '/' + node.path;
    }

    const ids = node.path.split('/');
    if (ids.length > 2 && ids[ids.length - 1] === '') {
      ids.splice(-1, 1);
      node.path = ids.join('/');
    }

    const cachedNode = this.findNodeByPath_orginal(node.path);
    return  {
      id: node.id,
      isFolder: node.dir,
      isExpanded: cachedNode ? cachedNode.isExpanded : false,
      pathToNode: node.path,
      pathToParent: this.getParentPath_orginal(node.path),
      name: node.name || node.id,
      children: cachedNode ? cachedNode.children : {}
    } as NodeInterface;



  }
  private createNode(path: string, node: NodeInterface): NodeInterface {

    // if (node.parentId && node.parentId > 0) {
    //   console.warn('[Node Service] Server should return initial path with "/"');
    //   node.pathToNode = '/' + node.pathToNode;
    // }

    const ids = node.pathToNode.split('/');
    if (ids.length > 2 && ids[ids.length - 1] === '') {
      ids.splice(-1, 1);
      node.pathToNode = ids.join('/');
    }

    const cachedNode = this.findNodeByPath(node.pathToNode);
    const pathToParentVar = this.getParentPath(node.pathToNode);
    // node.isExpanded = cachedNode ? cachedNode.isExpanded : false;
    // node.pathToParent = pathToParentVar;
    // node.children = cachedNode ? cachedNode.children : {};
    // node.name = node.name ? node.name : node.id + '';
    // return node;
    return  {
      id: node.id,
      isFolder: node.isFolder,
      isExpanded: cachedNode ? cachedNode.isExpanded : false,
      pathToNode: node.pathToNode,
      pathToParent: pathToParentVar,
      name: node.name || node.id,
      children: cachedNode ? cachedNode.children : {},
      createdDate: node.createdDate,
      updatedDate: node.updatedDate,
      size: node.size,
      extension: node.extension,
      downloadLinksrc: node.downloadLinksrc,
      downloadThumbnailSrc:node.downloadThumbnailSrc,
    } as NodeInterface;
  }
  private getNodesFromServer_orginal(path: string): Observable<any> {
    let folderId: any = this.findNodeByPath_orginal(path).id;
    folderId = folderId === 0 ? '' : folderId;

    return this.http.get(
      this.serviceTree.config.baseURL + this.serviceTree.config.api.listFile,
      { params: new HttpParams().set('parentPath', folderId) }
    );

  }
  private getNodesFromServer(path: string): Observable<Array<NodeInterface>> {
    this.store.dispatch({ type: SET_LOADING_STATE, payload: true });

    const findN = this.findNodeByPath(path);
    const folderId = findN ? findN.id : 0;
    // folderId = folderId === 0 ? '' : folderId;
    const retOut = new Observable<Array<NodeInterface>>(observer => {
      return this.getCategoryList(folderId, path).subscribe(
        xCat => {
          return this.getFileList(folderId, path).subscribe(
            (
              xfile => {
                xfile = xfile.concat(xCat);
                observer.next(xfile);
              })
          );
        });
    });

    return retOut;
  }
  public findNodeByPath_orginal(nodePath: string): NodeInterface {
    const ids = nodePath.split('/');
    ids.splice(0, 1);

    return ids.length === 0 ? this.serviceTree.nodes : ids.reduce((value, index) => value.children[index], this.serviceTree.nodes);
  }
  public findNodeByPath(nodePath: string): NodeInterface {
    const ids = nodePath.split('/');
    ids.splice(0, 1);
    if (ids.length === 0) {
      return this.serviceTree.nodes;
    }
    const retOut = ids.reduce((value, index) => value.children[index], this.serviceTree.nodes);
    return retOut;
  }

  public findNodeById_orginal(id: number): NodeInterface {
    const result = this.findNodeByIdHelper_orginal(id);

    if (result === null) {
      console.warn('[Node Service] Cannot find node by id. Id not existing or not fetched. Returning root.');
      return this.serviceTree.nodes;
    }

    return result;
  }
  public findNodeById(id: number): NodeInterface {

    const result = this.findNodeByIdHelper(id);

    if (result === null) {
      console.warn('[Node Service] Cannot find node by id. Id not existing or not fetched. Returning root.');
      return this.serviceTree.nodes;
    }

    return result;
  }

  public findNodeByIdHelper_orginal(id: number, node: NodeInterface = this.serviceTree.nodes): any {
    if (node.id === id) {
      return node;
    }

    const keys = Object.keys(node.children);

    for (let i = 0; i < keys.length; i++) {
      if (typeof node.children[keys[i]] === 'object') {
        const obj = this.findNodeByIdHelper_orginal(id, node.children[keys[i]]);
        if (obj != null) {
          return obj;
        }
      }
    }

    return null;
  }
  public findNodeByIdHelper(id: number, node: NodeInterface = this.serviceTree.nodes): any {
    if (node.id === id) {
      return node;
    }

    const keys = Object.keys(node.children);

    for (let i = 0; i < keys.length; i++) {
      if (typeof node.children[keys[i]] === 'object') {
        const obj = this.findNodeByIdHelper(id, node.children[keys[i]]);
        if (obj != null) {
          return obj;
        }
      }
    }

    return null;
  }

  public foldRecursively_orginal(node: NodeInterface): void {
    // console.log('folding ', node);
    const children = node.children;

    Object.keys(children).map((child: string) => {
      if (!children.hasOwnProperty(child) || !children[child].isExpanded) {
        return null;
      }

      this.foldRecursively_orginal(children[child]);
      // todo put this getElById into one func (curr inside node.component.ts + fm.component.ts) - this won't be maintainable
      document.getElementById('tree_' + children[child].pathToNode).classList.add('deselected');
      children[child].isExpanded = false;
    });
  }
  public foldRecursively(node: NodeInterface): void {
    // console.log('folding ', node);
    const children = node.children;

    Object.keys(children).map((child: string) => {
      if (!children.hasOwnProperty(child) || !children[child].isExpanded) {
        return null;
      }

      this.foldRecursively(children[child]);
      // todo put this getElById into one func (curr inside node.component.ts + fm.component.ts) - this won't be maintainable
      document.getElementById('tree_' + children[child].pathToNode).classList.add('deselected');
      children[child].isExpanded = false;
    });
  }

  public foldAll_orginal(): void {
    this.foldRecursively_orginal(this.serviceTree.nodes);
  }
  public foldAll(refresh = false): void {
    if (refresh) {
      this.refreshCurrentPath();
      // this.foldRecursively(this.serviceTree.nodes);
    } else {
      this.foldRecursively(this.serviceTree.nodes);
    }
  }

  get currentPath(): string {
    return this.privatePath;
  }

  set currentPath(value: string) {
    this.privatePath = value;
  }
  getCategoryList(folderId: number, path: string): Observable<Array<NodeInterface>> {
    return this.fileCategoryService.ServiceGetAllInCategoryById(folderId).pipe(
      map((x) => {
        const retList: NodeInterface[] = [];

        x.listItems.forEach(element => {
          const item: NodeInterface = {
            name: element.title,
            isRoot: true,
            id: element.id,
            parentId: element.linkParentId ? element.linkParentId : null,
            pathToNode: path + '/' + element.id,
            pathToParent: '',
            isFolder: true,
            isExpanded: false,
            createdDate: element.createdDate,
            updatedDate: element.updatedDate,
            downloadLinksrc: element.linkMainImageIdSrc,
          };
          item.pathToNode = '/' + item.pathToNode;
          item.pathToNode = item.pathToNode.replace('//', '/');
          // if (retList.length < 4) {
          retList.push(item);
          // }
        });
        return retList;
      })
    );

  }
  getFileList(folderId: number, path: string): Observable<Array<NodeInterface>> {
    return this.fileContentService.ServiceGetAllInCategoryById(folderId).pipe(
      map((x) => {
        const retList: NodeInterface[] = [];
        x.listItems.forEach(element => {
          const item: NodeInterface = {
            name: element.fileName,
            isRoot: false,
            id: element.id,
            parentId: element.linkCategoryId ? element.linkCategoryId : null,
            pathToNode: path + '/' + element.id,
            pathToParent: '',
            isFolder: false,
            isExpanded: false,
            createdDate: element.createdDate,
            updatedDate: element.updatedDate,
            downloadLinksrc: element.downloadLinksrc,
            downloadThumbnailSrc: element.downloadThumbnailSrc,
            size: element.fileSize,
            extension: element.extension
          };
          item.pathToNode = '/' + item.pathToNode;
          item.pathToNode = item.pathToNode.replace('//', '/');
          // if (retList.length < 2) {
          retList.push(item);
          // }
        });
        return retList;
      })
    );
  }
}

