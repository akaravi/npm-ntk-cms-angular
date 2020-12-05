import { Observable } from 'rxjs';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { retry, catchError, map } from 'rxjs/operators';
import { FileCategoryModel } from '../../models/entity/file/fileCategoryModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';


import { Injectable } from '@angular/core';
import { FileCompressDtoModel } from '../../models/dto/file/fileCompressDtoModel';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';


@Injectable()
export class FileCategoryService extends ApiCmsServerBase<FileCategoryModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'FileCategory';
  }

  ServiceGetSubCategoryFromCategory(CategoryId: number, NewId: number): Observable<ErrorExceptionResult<FileCategoryModel>> {
    return this.http
      .get(
        this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetSubCategoryFromCategory/' + CategoryId, {
        headers: this.getHeaders(),
      },
      )
      .pipe(
        retry(this.configApiRetry),
        map((ret: ErrorExceptionResult<FileCategoryModel>) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceCreateCompressDownload(model: FileCompressDtoModel): Observable<ErrorExceptionResultBase> {
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleCotrolerUrl() + '/CreateCompressDownload/', model, {
        headers: this.getHeaders(),
      },
      )
      .pipe(
        retry(this.configApiRetry),
        map((ret: ErrorExceptionResultBase) => {
          return this.errorExceptionResultBaseCheck(ret);
        }),
      );
  }
}
