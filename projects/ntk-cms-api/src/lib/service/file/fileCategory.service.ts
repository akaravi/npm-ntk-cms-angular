import { Observable } from 'rxjs';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { retry, catchError, map } from 'rxjs/operators';
import { FileCategoryModel } from '../../models/entity/file/fileCategoryModel';
import { ErrorExcptionResult } from '../../models/entity/base/errorExcptionResult';


import { Injectable } from '@angular/core';
import { FileCompressDtoModel } from '../../models/dto/file/fileCompressDtoModel';
import { ErrorExcptionResultBase } from '../../models/entity/base/errorExcptionResultBase';


@Injectable()
export class FileCategoryService extends ApiCmsServerBase<FileCategoryModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'FileCategory';
  }

  ServiceGetSubCategoryFromCategory(CategoryId: number, NewId: number): Observable<ErrorExcptionResult<FileCategoryModel>> {
    return this.http
      .get(
        this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetSubCategoryFromCategory/' + CategoryId, {
        headers: this.getHeaders(),
      },
      )
      .pipe(
        retry(this.configApiRetry),
        map((ret: ErrorExcptionResult<FileCategoryModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
  ServiceCreateCompressDownload(model: FileCompressDtoModel): Observable<ErrorExcptionResultBase> {
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleCotrolerUrl() + '/CreateCompressDownload/', model, {
        headers: this.getHeaders(),
      },
      )
      .pipe(
        retry(this.configApiRetry),
        map((ret: ErrorExcptionResultBase) => {
          return this.errorExcptionResultBaseCheck(ret);
        }),
      );
  }
}
