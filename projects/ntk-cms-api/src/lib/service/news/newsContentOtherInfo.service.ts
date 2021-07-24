import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { NewsContentOtherInfoModel } from '../../models/entity/news/newsContentOtherInfoModel';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { map, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class NewsContentOtherInfoService extends ApiCmsServerBase<NewsContentOtherInfoModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'NewsContentOtherInfo';
  }
  ServiceAddBatch(model: NewsContentOtherInfoModel[]): Observable<ErrorExceptionResult<NewsContentOtherInfoModel>> {
    if (model == null) {
      model = [];
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/AddBatch', model, {
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
  ServiceEditBatch(model: NewsContentOtherInfoModel[]): Observable<ErrorExceptionResult<NewsContentOtherInfoModel>> {
    if (model == null) {
      model = [];
    }
    return this.http
      .put(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/EditBatch', model, {
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

