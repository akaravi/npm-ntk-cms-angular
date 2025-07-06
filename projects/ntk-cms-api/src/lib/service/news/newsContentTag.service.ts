import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { NewsContentTagModel } from '../../models/entity/news/newsContentTagModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class NewsContentTagService extends ApiCmsServerBase<NewsContentTagModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'NewsContentTag';
  }


  ServiceAddBatch(model: NewsContentTagModel[]): Observable<ErrorExceptionResult<NewsContentTagModel>> {
    if (model == null) {
      model = [];
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/AddBatch', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceDeleteBatch(model: NewsContentTagModel[]): Observable<ErrorExceptionResultBase> {
    if (model == null) {
      model = [];
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/DeleteBatch', model, {
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



