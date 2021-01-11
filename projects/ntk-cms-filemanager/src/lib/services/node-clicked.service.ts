import { FileContentModel } from './../../../../ntk-cms-api/src/lib/models/entity/file/fileContentModel';
import { Injectable } from '@angular/core';
import { NodeInterface } from '../interfaces/node.interface';
import { NodeService } from './node.service';
import { TreeModel } from '../models/tree.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { first, map } from 'rxjs/operators';
import { BaseService } from './base.service';
import { FileCategoryModel } from '../../../../ntk-cms-api/src/lib/models/entity/file/fileCategoryModel';
import { ErrorExceptionResult } from 'ntk-cms-api';

@Injectable({
  providedIn: 'root',
})
export class NodeClickedService extends BaseService {
  public tree: TreeModel;

  constructor(
    public ngxSmartModalService: NgxSmartModalService,
    private nodeService: NodeService,
    private http: HttpClient,
  ) {
    super();
  }

  public startDownload(node: NodeInterface): void {
    window.open(node.downloadLinksrc, '_blank');
  }

  public actionDeleteFolder(node: NodeInterface): void {
    this.http
      .delete(this.tree.config.baseURL + this.tree.config.api.deleteFolder + '/' + node.id, {
        headers: this.getHeaders(),
      })
      .pipe(
        map((ret) => {
          const retExc = this.errorExceptionResultCheck<FileCategoryModel>(ret);
        }),
      )
      .subscribe(
        (a) => this.successWithSideViewClose(),
        (err) => this.actionFailed('actionDeleteFolder', err),
      );

    // this.sideEffectHelper(
    //   'Delete',
    //   new HttpParams().append('path', node.id + ''),
    //   'delete',
    //   this.tree.config.api.deleteFile,
    //   () => this.successWithSideViewClose(),
    // );
  }
  public actionDeleteFile(node: NodeInterface): void {
    this.http
      .delete(this.tree.config.baseURL + this.tree.config.api.deleteFile + '/' + node.id, {
        headers: this.getHeaders(),
      })
      .pipe(
        map((ret) => {
          const retExc = this.errorExceptionResultCheck<FileCategoryModel>(ret);
        }),
      ).subscribe(
        (a) => this.successWithSideViewClose(),
        (err) => this.actionFailed('actionDeleteFile', err),
      );

    // this.sideEffectHelper(
    //   'Delete',
    //   new HttpParams().append('path', node.id + ''),
    //   'delete',
    //   this.tree.config.api.deleteFile,
    //   () => this.successWithSideViewClose(),
    // );
  }

  public actionSearchForString(input: string): void {
    // this.sideEffectHelper(
    //   'Search',
    //   new HttpParams().append('query', input),
    //   'get',
    //   this.tree.config.api.searchFiles,
    //   (res) => this.searchSuccess(input, res),
    // );
  }

  public actionCreateFolder(currentParent: number, newDirName: string): void {
    const model = new FileCategoryModel();
    model.Title = newDirName;
    if (currentParent > 0) {
      model.LinkParentId = currentParent;
    }
    this.http
      .post(this.tree.config.baseURL + this.tree.config.api.createFolder, model, {
        headers: this.getHeaders(),
      })
      .pipe(
        map((ret) => {
          const retExc = this.errorExceptionResultCheck<FileCategoryModel>(ret);
        }),
      ).subscribe(
        (a) => this.successWithSideViewClose(),
        (err) => this.actionFailed('actionCreateFolder', err),
      );


    // this.sideEffectHelper(
    //   'Create Folder',
    //   (() => {
    //     let httpParams = new HttpParams().append('dirName', newDirName);
    //     if (currentParent !== 0) {
    //       httpParams = httpParams.append('parentPath', currentParent + '');
    //     }

    //     console.log(currentParent, httpParams.get('dirName'), httpParams.get('parentPath'));
    //     return httpParams;
    //   })(),
    //   'post',
    //   this.tree.config.api.createFolder,
    // );
  }

  public actionRenameFolder(id: number, newName: string): void {
    this.http
      .get(this.tree.config.baseURL + this.tree.config.api.getOneFolder + '/' + id, {
        headers: this.getHeaders(),
      })
      .pipe(
        map((ret) => {
          return this.errorExceptionResultCheck<FileCategoryModel>(ret);
        }),
      )
      .toPromise()
      .then((retExc) => {
        if (!retExc.IsSuccess) {
           this.actionFailed('actionRenameFolder', retExc.ErrorMessage);
          return;
        }

        retExc.Item.Title = newName;
        this.http
          .put(this.tree.config.baseURL + this.tree.config.api.renameFolder, retExc.Item, {
            headers: this.getHeaders(),
          })
          .pipe(
            map((ret) => {
              return this.errorExceptionResultCheck<FileCategoryModel>(ret);
            }),
          ).subscribe(
            (a) => this.successWithSideViewClose(),
            (err) => this.actionFailed('actionRenameFolder', err),
          );
      });
  }
  public actionRenameFile(id: number, newName: string): void {
    this.http
      .get(this.tree.config.baseURL + this.tree.config.api.getOneFile + '/' + id, {
        headers: this.getHeaders(),
      })
      .pipe(
        map((ret) => {
          return this.errorExceptionResultCheck<FileContentModel>(ret);
        }),
      )
      .toPromise()
      .then((retExc) => {
        if (!retExc.IsSuccess) {
          this.actionFailed('actionRenameFile', retExc.ErrorMessage);
          return;
        }

        retExc.Item.FileName = newName;
        this.http
          .put(this.tree.config.baseURL + this.tree.config.api.renameFile, retExc.Item, {
            headers: this.getHeaders(),
          })
          .pipe(
            map((ret) => {
              return this.errorExceptionResultCheck<FileContentModel>(ret);
            }),
          ).subscribe(
            (a) => this.successWithSideViewClose(),
            (err) => this.actionFailed('actionRenameFile', err),
          );
      });
  }

  private successWithSideViewClose(): void {
    this.actionSuccess();
    document.getElementById('side-view').classList.remove('selected');
  }

  private searchSuccess(input: string, data: any): void {
    const obj = {
      searchString: input,
      response: data,
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
