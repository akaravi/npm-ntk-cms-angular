import { NewsContentOtherInfoModel } from '../../models/entity/news/newsContentOtherInfoModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class NewsContentOtherInfoService extends ApiCmsServerBase<NewsContentOtherInfoModel, number, FilterModel> {
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

