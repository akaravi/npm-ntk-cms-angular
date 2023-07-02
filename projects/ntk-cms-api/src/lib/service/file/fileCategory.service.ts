import { Observable } from 'rxjs';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { retry, catchError, map } from 'rxjs/operators';
import { FileCategoryModel } from '../../models/entity/file/fileCategoryModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';


import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { FileCompressDtoModel } from '../../models/dto/file/fileCompressDtoModel';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';


@Injectable()
export class FileCategoryService extends ApiCmsServerBase<FileCategoryModel, number,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'FileCategory';
  }

  ServiceGetAllInCategoryById(ParentId: number): Observable<ErrorExceptionResult<FileCategoryModel>> {
    return this.http
      .get(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllInCategoryById/' + ParentId, {
        headers: this.getHeaders(),
      },
      )
      .pipe(
        retry(this.configApiRetry),
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceCreateCompressDownload(model: FileCompressDtoModel): Observable<ErrorExceptionResultBase> {
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/CreateCompressDownload/', model, {
        headers: this.getHeaders(),
      },
      )
      .pipe(
        retry(this.configApiRetry),
        map((ret: any) => {
          return this.errorExceptionResultBaseCheck(ret);
        }),
      );
  }

  ServiceMove(OldId: number, NewId: number): Observable<ErrorExceptionResult<FileCategoryModel>> {
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/Move',
        { Old: OldId, New: NewId },
        {
          headers: this.getHeaders(),
        },
      )
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceOptimaze(): Observable<ErrorExceptionResultBase> {
    return this.http
      .get(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/Optimaze',
        {
          headers: this.getHeaders(),
        },
      )
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
}

