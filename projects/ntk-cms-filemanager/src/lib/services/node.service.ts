import { Injectable } from '@angular/core';
import { NodeInterface } from '../interfaces/node.interface';
import { Observable } from 'rxjs';
import { TreeModel } from '../models/tree.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FileManagerStoreService, SET_LOADING_STATE, SET_PATH, SET_SELECTED_NODE } from './file-manager-store.service';
import { BaseService } from './base.service';
import { map } from 'rxjs/operators';
import { ErrorExceptionResult, FileCategoryModel, FileContentModel, FilterDataModel, FilterModel } from 'ntk-cms-api';

@Injectable({
    providedIn: 'root'
})
export class NodeService extends BaseService {
    public tree: TreeModel;
    private privatePath: string;
    get currentPath(): string {
        return this.privatePath;
    }
    set currentPath(value: string) {
        this.privatePath = value;
    }
    constructor(private http: HttpClient, private store: FileManagerStoreService) {
        super();
    }

    // todo ask server to get parent structure
    public startManagerAt(path: string): void {
        this.currentPath = path;
        this.refreshCurrentPath();
    }

    public refreshCurrentPath(): any {
        this.findNodeByPath(this.currentPath).children = {};
         debugger
        this.getNodes(this.currentPath).then(() => {
            debugger;
            this.store.dispatch({ type: SET_SELECTED_NODE, payload: this.tree.nodes });
            this.store.dispatch({ type: SET_PATH, payload: this.currentPath });
        });
    }

    getNodes(path: string): any {
        return new Promise((resolve => {

            this.parseNodesFolder(path).subscribe((data: Array < NodeInterface > ) => {
                // tslint:disable-next-line: prefer-for-of
                for (let i = 0; i < data.length; i++) {
                    const parentPath = this.getParentPath(data[i].pathToNode);
                    this.findNodeByPath(parentPath).children[data[i].name] = data[i];
                }

                this.parseNodesFiles(path).subscribe((data2: Array < NodeInterface > ) => {
                    // tslint:disable-next-line: prefer-for-of
                    for (let i = 0; i < data2.length; i++) {
                        const parentPath = this.getParentPath(data2[i].pathToNode);
                        this.findNodeByPath(parentPath).children[data2[i].name] = data2[i];
                    }


                });
                resolve(null); // doto: karavi
            });


        }));
    }

    private getParentPath(path: string): string {
        let parentPath = path.split('/');
        parentPath = parentPath.slice(0, parentPath.length - 1);
        return parentPath.join('/');
    }

    private parseNodesFiles(path: string): Observable < NodeInterface[] > {
        return new Observable(observer => {
            this.getNodesFilesFromServer(path).subscribe((data) => {
                observer.next((data as unknown as Array < any > ).map(node => this.createNode(path, node)));
                this.store.dispatch({ type: SET_LOADING_STATE, payload: false });
            });
        });
    }
    private parseNodesFolder(path: string): Observable < NodeInterface[] > {
        return new Observable(observer => {
            this.getNodesFoldersFromServer(path).subscribe((data) => {
                observer.next((data as unknown as Array < any > ).map(node => this.createNode(path, node)));
                this.store.dispatch({ type: SET_LOADING_STATE, payload: false });
            });
        });
    }

    private createNode(path: any, node: any): NodeInterface {
        if (!node || !path || node.path[0] !== '/') {
            console.warn('[Node Service] Server should return initial path with "/"');
            node.path = '/' + node.path;
        }

        const ids = node.path.split('/');
        if (ids.length > 2 && ids[ids.length - 1] === '') {
            ids.splice(-1, 1);
            node.path = ids.join('/');
        }

        const cachedNode = this.findNodeByPath(node.path);

        return {
            id: node.id,
            parentId: node.parentId,
            isFolder: node.dir,
            isExpanded: cachedNode ? cachedNode.isExpanded : false,
            pathToNode: node.path,
            pathToParent: this.getParentPath(node.path),
            name: node.name || node.id,
            downloadLinksrc: node.downloadLinksrc,
            children: cachedNode ? cachedNode.children : {}
        } as NodeInterface;
    }
    private getNodesFromServerNormal = (path: string) => {
        let folderId: any = this.findNodeByPath(path).id;
        folderId = folderId === 0 ? '' : folderId;

        return this.http.post(
            this.tree.config.baseURL + this.tree.config.api.listFile, { params: new HttpParams().set('parentPath', folderId) }
        );
    }
    private getNodesFilesFromServer = (folderId: string) => {
        // let folderId: any = this.findNodeByPath(path).id;
        // folderId = folderId === 0 ? '' : folderId;


        const filterModel = new FilterModel();
        filterModel.RowPerPage = 100;
        filterModel.Filters = [];
        const filter = new FilterDataModel();
        filter.PropertyName = 'LinkCategoryId';
        filter.Value = folderId;
        filter.IntValueForceNullSearch = true;
        filterModel.Filters.push(filter);

        return this.http.post(this.tree.config.baseURL + this.tree.config.api.listFile, filterModel, {
                headers: this.getHeaders(),
            })
            .pipe(
                map((ret) => {
                    const retExc = this.errorExceptionResultCheck < FileContentModel > (ret);
                    const retOut: any[] = [];
                    if (retExc.IsSuccess) {
                        retExc.ListItems.forEach(x => {
                            const row = {
                                size: 1,
                                id: x.Id,
                                parentId: x.LinkCategoryId,
                                dir: false,
                                path: x.LinkCategoryId,
                                name: 'File_' + x.FileName,
                                downloadLinksrc: x.DownloadLinksrc
                            };
                            retOut.push(row);
                        });
                    }
                    return retOut;
                }),
            );
    }

    private getNodesFoldersFromServer = (folderId: string) => {
        // let folderId: any = this.findNodeByPath(path).id;
        // folderId = folderId === 0 ? '' : folderId;



        const filterModel = new FilterModel();
        filterModel.RowPerPage = 100;
        filterModel.Filters = [];
        const filter = new FilterDataModel();
        filter.PropertyName = 'LinkParentId';
        filter.Value = folderId;
        filter.IntValueForceNullSearch = true;
        filterModel.Filters.push(filter);
        // Category
        return this.http.post(this.tree.config.baseURL + this.tree.config.api.listFolder, filterModel, {
                headers: this.getHeaders(),
            })
            .pipe(
                map((ret) => {
                    const retExc = this.errorExceptionResultCheck < FileCategoryModel > (ret);
                    const retOut: any[] = [];
                    if (retExc.IsSuccess) {
                        retExc.ListItems.forEach(x => {
                            const row = {
                                size: 0,
                                id: x.Id,
                                parentId: x.LinkParentId,
                                dir: true,
                                path: x.LinkParentId,
                                name: x.Title
                            };
                            retOut.push(row);
                        });
                    }
                    // retOut
                    return retOut;
                    // retOut
                }),
            );

    }

    public findNodeByPath(nodePath: string): NodeInterface {
        const ids = nodePath.split('/');
        ids.splice(0, 1);

        return ids.length === 0 ? this.tree.nodes : ids.reduce((value, index) => value.children[index], this.tree.nodes);
    }

    public findNodeById(id: number): NodeInterface {
        const result = this.findNodeByIdHelper(id);

        if (result === null) {
            console.warn('[Node Service] Cannot find node by id. Id not existing or not fetched. Returning root.');
            return this.tree.nodes;
        }

        return result;
    }

    public findNodeByIdHelper(id: number, node: NodeInterface = this.tree.nodes): NodeInterface {
        if (node.id === id) {
            return node;
        }

        const keys = Object.keys(node.children);

        // tslint:disable-next-line: prefer-for-of
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

    public foldAll(): void {
        this.foldRecursively(this.tree.nodes);
    }


}
