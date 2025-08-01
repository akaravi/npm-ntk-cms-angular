import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { FileCopyCutDtoModel } from '../../models/dto/file/fileCopyCutDtoModel';
import { FileDownloadDtoModel } from '../../models/dto/file/fileDownloadDtoModel';
import { FileUploadByUrlDtoModel } from '../../models/dto/file/fileUploadByUrlDtoModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';
import { FilterModel } from '../../models/entity/base/filterModel';
import { FileContentModel } from '../../models/entity/file/fileContentModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class FileContentService extends ApiCmsServerBase<FileContentModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'FileContent';
  }

  ServiceUploadByUrl(model: FileUploadByUrlDtoModel): Observable<ErrorExceptionResult<FileContentModel>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/UploadByUrl/', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }

  ServiceCopyCutFile(model: FileCopyCutDtoModel): Observable<ErrorExceptionResult<FileContentModel>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/CopyCutFile/', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceCopyCutFileRootToRootFolder(): Observable<ErrorExceptionResult<FileContentModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/CopyCutFileRootToRootFolder/', {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceCopy(model: FileContentModel): Observable<ErrorExceptionResult<FileContentModel>> {
    if (model == null) {
      model = new FileContentModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/Copy/', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }

  ServiceGetAllInCategoryById(categoryId: number): Observable<ErrorExceptionResult<FileContentModel>> {

    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllInCategoryById/' + categoryId, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }

  ServiceSearchFilesInCategory(model: FilterModel): Observable<ErrorExceptionResultBase> {
    if (model == null) {
      model = new FilterModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/SearchFilesInCategory', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultBaseCheck(ret);
        }),
      );
  }

  ServiceDownloadFile(model: FileDownloadDtoModel): Observable<ErrorExceptionResultBase> {
    if (model == null) {
      model = new FileDownloadDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/DownloadFile', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultBaseCheck(ret);
        }),
      );
  }
  ServiceUpdateFileSizes(fileId: number): Observable<ErrorExceptionResultBase> {

    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/UpdateFileSizes/' + fileId, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultBaseCheck(ret);
        }),
      );
  }

  ServiceUpdateSumSizeUpload(fileId: number): Observable<ErrorExceptionResultBase> {

    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/UpdateSumSizeUpload/' + fileId, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultBaseCheck(ret);
        }),
      );
  }


  ServiceImageFileEdit(model: FileDownloadDtoModel): Observable<ErrorExceptionResultBase> {

    if (model == null) {
      model = new FileDownloadDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/ImageFileEdit', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultBaseCheck(ret);
        }),
      );
  }
  ServiceReplace(model: FileContentModel): Observable<ErrorExceptionResult<FileContentModel>> {
    if (model == null) {
      model = new FileContentModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/replace/', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
}
