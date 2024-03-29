import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { NewsContentOtherInfoModel } from '../../models/entity/news/newsContentOtherInfoModel';

import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { Observable } from 'rxjs';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { map, retry } from 'rxjs/operators';


@Injectable()
export class NewsContentOtherInfoService extends ApiCmsServerBase<NewsContentOtherInfoModel, number,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'NewsContentOtherInfo';
  }
  ServiceAddBatch(model: NewsContentOtherInfoModel[]): Observable<ErrorExceptionResult<NewsContentOtherInfoModel>> {
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
  ServiceEditBatch(model: NewsContentOtherInfoModel[]): Observable<ErrorExceptionResult<NewsContentOtherInfoModel>> {
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

