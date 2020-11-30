import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ErrorExcptionResult } from '../../models/entity/base/errorExcptionResult';
import { catchError, map, retry } from 'rxjs/operators';
import { FileContentModel } from '../../models/entity/file/fileContentModel';
import { Observable } from 'rxjs';
import { ScoreClickDtoModel } from '../../models/dto/core/scoreClickDtoModel';
import { ErrorExcptionResultBase } from '../../models/entity/base/errorExcptionResultBase';
import { Injectable } from '@angular/core';
import { FileUploadByUrlDtoModel } from '../../models/dto/file/fileUploadByUrlDtoModel';
import { FileCopyCutDtoModel } from '../../models/dto/file/fileCopyCutDtoModel';
import { FileDownloadDtoModel } from '../../models/dto/file/fileDownloadDtoModel';


@Injectable()
export class FileContentService extends ApiCmsServerBase<FileContentModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'FileContent';
  }

  ServiceUploadByUrl(model: FileUploadByUrlDtoModel): Observable<ErrorExcptionResult<FileContentModel>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/UploadByUrl/', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExcptionResult<FileContentModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }

  ServiceCopyCutFile(model: FileCopyCutDtoModel): Observable<ErrorExcptionResult<FileContentModel>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/CopyCutFile/', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExcptionResult<FileContentModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
  ServiceCopyCutFileRootToRootFolder(): Observable<ErrorExcptionResult<FileContentModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/CopyCutFileRootToRootFolder/', {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExcptionResult<FileContentModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
  ServiceCopy(model: FileContentModel): Observable<ErrorExcptionResult<FileContentModel>> {
    if (model == null) {
      model = new FileContentModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/Copy/', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExcptionResult<FileContentModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }

  ServiceGetFilesInCategoryId(categoryId: number): Observable<ErrorExcptionResult<FileContentModel>> {

    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetFilesInCategoryId/' + categoryId, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExcptionResult<FileContentModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }

  ServiceSearchFilesInCategory(model: FilterModel): Observable<ErrorExcptionResultBase> {
    if (model == null) {
      model = new FilterModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/SearchFilesInCategory', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExcptionResultBase) => {
          return this.errorExcptionResultBaseCheck(ret);
        }),
      );
  }

  ServiceDownloadFile(model: FileDownloadDtoModel): Observable<ErrorExcptionResultBase> {
    if (model == null) {
      model = new FileDownloadDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/DownloadFile', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExcptionResultBase) => {
          return this.errorExcptionResultBaseCheck(ret);
        }),
      );
  }
  ServiceUpdateFileSizes(fileId: number): Observable<ErrorExcptionResultBase> {

    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/UpdateFileSizes/' + fileId, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExcptionResultBase) => {
          return this.errorExcptionResultBaseCheck(ret);
        }),
      );
  }

  ServiceUpdateSumSizeUpload(fileId: number): Observable<ErrorExcptionResultBase> {

    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/UpdateSumSizeUpload/' + fileId, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExcptionResultBase) => {
          return this.errorExcptionResultBaseCheck(ret);
        }),
      );
  }


  ServiceImageFileEdit(model: FileDownloadDtoModel): Observable<ErrorExcptionResultBase> {

    if (model == null) {
      model = new FileDownloadDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/ImageFileEdit', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExcptionResultBase) => {
          return this.errorExcptionResultBaseCheck(ret);
        }),
      );
  }
  ServiceReplace(model: FileContentModel): Observable<ErrorExcptionResult<FileContentModel>> {
    if (model == null) {
      model = new FileContentModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/replace/', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExcptionResult<FileContentModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
}
