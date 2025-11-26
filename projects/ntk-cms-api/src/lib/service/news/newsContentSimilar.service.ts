import { NewsContentSimilarModel } from '../../models/entity/news/newsContentSimilarModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';
import { FilterModel } from '../../models/entity/base/filterModel';

@Injectable()
export class NewsContentSimilarService extends ApiCmsServerBase<
  NewsContentSimilarModel,
  number,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'NewsContentSimilar';
  }
  ServiceAddBatch(
    model: NewsContentSimilarModel[]
  ): Observable<ErrorExceptionResult<NewsContentSimilarModel>> {
    if (model == null) {
      model = [];
    }
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/AddBatch',
        model,
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        retry(this.configApiRetry),

        map((ret: any) => {
          return ret;
        })
      );
  }
  ServiceDeleteBatch(
    model: NewsContentSimilarModel[]
  ): Observable<ErrorExceptionResultBase> {
    if (model == null) {
      model = [];
    }
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/DeleteBatch',
        model,
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        retry(this.configApiRetry),

        map((ret: any) => {
          return ret;
        })
      );
  }
}
