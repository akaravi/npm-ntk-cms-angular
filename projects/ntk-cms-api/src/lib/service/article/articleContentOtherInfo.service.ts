import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { ArticleContentOtherInfoModel } from '../../models/entity/article/articleContentOtherInfoModel';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { map, retry } from 'rxjs/operators';


@Injectable()
export class ArticleContentOtherInfoService extends ApiCmsServerBase<ArticleContentOtherInfoModel, number>  {
  getModuleControllerUrl(): string {
    return 'ArticleContentOtherInfo';
  }
  ServiceAddBatch(model: ArticleContentOtherInfoModel[]): Observable<ErrorExceptionResult<ArticleContentOtherInfoModel>> {
    if (model == null) {
      model = [];
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/AddBatch', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceEditBatch(model: ArticleContentOtherInfoModel[]): Observable<ErrorExceptionResult<ArticleContentOtherInfoModel>> {
    if (model == null) {
      model = [];
    }
    return this.http
      .put(this.getBaseUrl() + this.getModuleControllerUrl() + '/EditBatch', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
}
