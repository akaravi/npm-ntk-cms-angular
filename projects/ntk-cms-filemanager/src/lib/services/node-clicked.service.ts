import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NtkSmartModalService } from 'ngx-ntk-smart-module';
import { FileCategoryModel, FileCategoryService, FileContentModel, FileContentService } from 'ntk-cms-api';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { NodeInterface } from '../interfaces/node.interface';
import { TreeModel } from '../models/tree.model';
import { FileManagerStoreService } from './file-manager-store.service';
import { NodeService } from './node.service';

@Injectable()
export class NodeClickedService {
  public serviceTree: TreeModel;

  constructor(
    public ngxSmartModalService: NtkSmartModalService,
    private nodeService: NodeService,
    private store: FileManagerStoreService,
    private http: HttpClient,
    private fileContentService: FileContentService,
    private fileCategoryService: FileCategoryService,
  ) {
  }

  public startDownload_orginal(node: NodeInterface): void {
    const parameters = new HttpParams().append('path', node.id + '');
    this.reachServer('download', this.serviceTree.config.api.downloadFile, parameters);
  }
  public startDownload(node: NodeInterface): void {
    window.open(node.downloadLinksrc, '_blank');
  }
  public initDelete_orginal(node: NodeInterface): void {
    this.sideEffectHelper(
      'Delete',
      new HttpParams().append('path', node.id + ''),
      'delete',
      this.serviceTree.config.api.deleteFile,
      () => this.successWithSideViewClose()
    );
  }
  public initDelete(node: NodeInterface): void {
    const prosses = 'initDelete';
    this.store.processStart(prosses);
    if (node.isFolder) {
      this.fileCategoryService.ServiceDelete(node.id).subscribe(
        (next) => {
          if (next.isSuccess) {
            this.successWithSideViewClose();
          }
          else {
            this.actionFailed('Delete Folder Error', next.errorMessage);
          }
          this.store.processStop(prosses);
        }
        , (error) => {
          this.actionFailed('Delete Folder Error', error);
          this.store.processStop(prosses);
        }
      );
    } else {
      this.fileContentService.ServiceDelete(node.id).subscribe(
        (next) => {
          if (next.isSuccess) {
            this.successWithSideViewClose();
          }
          else {
            this.actionFailed('Delete File Error', next.errorMessage);
          }
          this.store.processStop(prosses);
        }
        , (error) => {
          this.actionFailed('Delete File Error', error);
          this.store.processStop(prosses);
        }
      );
    }
  }

  public searchForString_orginal(input: string): void {
    this.sideEffectHelper(
      'Search',
      new HttpParams().append('query', input),
      'get',
      this.serviceTree.config.api.searchFiles,
      (res) => this.searchSuccess(input, res)
    );
  }
  public searchForString(input: string): void {



  }





  public createFolder_orginal(currentParent: number, newDirName: string): void {
    this.sideEffectHelper(
      'Create Folder',
      (() => {
        let httpParams = new HttpParams().append('dirName', newDirName);
        if (currentParent !== 0) {
          httpParams = httpParams.append('parentPath', currentParent + '');
        }

        console.log(currentParent, httpParams.get('dirName'), httpParams.get('parentPath'));
        return httpParams;
      })(),
      'post',
      this.serviceTree.config.api.createFolder
    );
  }

  public createFolder(currentParent: number, newDirName: string): void {
    const model = new FileCategoryModel();
    model.title = newDirName;
    if (currentParent > 0) {
      model.linkParentId = currentParent;
    }
    const prosses = 'createFolder';
    this.store.processStart(prosses);
    this.fileCategoryService.ServiceAdd(model).subscribe(
      (next) => {
        if (next.isSuccess) {
          this.successWithSideViewClose();
        }
        else {
          this.actionFailed('Create Folder Error', next.errorMessage);
        }
        this.store.processStop(prosses);
      }
      , (error) => {
        this.actionFailed('Create Folder Error', error);
        this.store.processStop(prosses);
      }
    );
  }
  public createFile(
    currentParent: number, fileName: string, uploadFileGUID: string,
    successMethod: any,
    failMethod: any
  ): void {
    const model = new FileContentModel();
    model.fileName = fileName;
    model.uploadFileGUID = uploadFileGUID;
    if (currentParent > 0) {
      model.linkCategoryId = currentParent;
    }
    const prosses = 'createFile';
    this.store.processStart(prosses);
    this.fileContentService.ServiceAdd(model).subscribe(
      (next) => {
        if (next.isSuccess) {
          this.successWithSideViewClose();
          if (successMethod) {
            successMethod(next);
          }
        }
        else {
          this.actionFailed('Create File Error', next.errorMessage);
        }
        this.store.processStop(prosses);
      }
      , (error) => {
        this.actionFailed('Create File Error', error);
        if (failMethod) {
          failMethod(error);
        }
        this.store.processStop(prosses);
      }
    );
  }
  public rename_orginal(node: NodeInterface, newName: string): void {
    this.sideEffectHelper(
      'Rename',
      new HttpParams().append('path', node.id + '').append('newName', newName),
      'post',
      this.serviceTree.config.api.renameFile,
      () => this.successWithSideViewClose()
    );
  }
  public rename(node: NodeInterface, newName: string): void {
    const prosses = 'rename';
    this.store.processStart(prosses);
    if (node.isFolder) {
      this.fileCategoryService.ServiceGetOneById(node.id).subscribe((next) => {
        if (next.isSuccess) {
          next.item.title = newName;
          /** update */
          this.fileCategoryService.ServiceEdit(next.item).subscribe(
            (next2) => {
              if (next2.isSuccess) {
                this.successWithSideViewClose();
              }
              else {
                this.actionFailed('rename Folder Error', next.errorMessage);
              }
              this.store.processStop(prosses);
            }
            , (error) => {
              this.actionFailed('rename Folder Error', error);
              this.store.processStop(prosses);
            }
          );
          /** update */
        } else {
          this.actionFailed('rename Folder Error', next.errorMessage);
          this.store.processStop(prosses);
        }
      }
        , (error) => {
          this.actionFailed('rename Folder Error', error);
          this.store.processStop(prosses);
        });

    } else {
      this.fileContentService.ServiceGetOneById(node.id).subscribe((next) => {
        if (next.isSuccess) {
          next.item.fileName = newName;
          /** update */
          this.fileContentService.ServiceEdit(next.item).subscribe(
            (next2) => {
              if (next2.isSuccess) {
                this.successWithSideViewClose();
              }
              else {
                this.actionFailed('rename File Error', next.errorMessage);
              }
              this.store.processStop(prosses);
            }
            , (error) => {
              this.actionFailed('rename File Error', error);
              this.store.processStop(prosses);
            }
          );
          /** update */
        } else {
          this.actionFailed('rename File Error', next.errorMessage);
          this.store.processStop(prosses);
        }
      }
        , (error) => {
          this.actionFailed('rename File Error', error);
          this.store.processStop(prosses);
        });
    }
  }

  private sideEffectHelper(
    name: string, parameters: HttpParams, httpMethod: string, apiURL: string,
    successMethod = (a: any) => this.actionSuccess(a),
    failMethod = (a: any, b: any) => this.actionFailed(a, b)
  ): void {
    this.ngxSmartModalService.getModal('waitModal').open();

    this.reachServer(httpMethod, apiURL, parameters)
      .subscribe(
        (a) => successMethod(a),
        (err) => failMethod(name, err)
      );
  }

  private reachServer(method: string, apiUrl: string, parameters: HttpParams, data: any = {}): Observable<any> {
    switch (method.toLowerCase()) {
      case 'get':
        return this.http.get(this.serviceTree.config.baseURL + apiUrl, { params: parameters });
      case 'post':
        return this.http.post(this.serviceTree.config.baseURL + apiUrl, data, { params: parameters });
      case 'delete':
        return this.http.delete(this.serviceTree.config.baseURL + apiUrl, { params: parameters });
      case 'download':
        window.open(this.serviceTree.config.baseURL + apiUrl + '?path=' + parameters.get('path'), '_blank');
        return null;
      default:
        console.warn('[NodeClickedService] Incorrect params for this side-effect');
        return null;
    }
  }

  private successWithSideViewClose(): void {
    this.actionSuccess();
    document.getElementById('side-view').classList.remove('selected');
  }

  private searchSuccess(input: string, data: any): void {
    const obj = {
      searchString: input,
      response: data
    };

    this.actionSuccess();

    this.ngxSmartModalService.setModalData(obj, 'searchModal', true);
    this.ngxSmartModalService.getModal('searchModal').open();
  }

  private actionSuccess(response: string = ''): void {
    document.body.classList.remove('dialog-open');

    this.nodeService.refreshCurrentPath();

    const modal = this.ngxSmartModalService.getModal('waitModal');
    modal.onOpenFinished.pipe(first()).subscribe(() => modal.close());
    modal.close();
  }

  private actionFailed(name: string, error: any): void {
    document.body.classList.remove('dialog-open');

    this.ngxSmartModalService.getModal('waitModal').close();
    this.ngxSmartModalService.getModal('errorModal').open();
    console.warn('[NodeClickedService] Action "' + name + '" failed', error);
  }

}
