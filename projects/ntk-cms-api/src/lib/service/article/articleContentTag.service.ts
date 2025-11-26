import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ArticleContentTagModel } from '../../models/entity/article/articleContentTagModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';
import { FilterModel } from '../../models/entity/base/filterModel';

@Injectable()
export class ArticleContentTagService extends ApiCmsServerBase<
  ArticleContentTagModel,
  number,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'ArticleContentTag';
  }

  ServiceAddBatch(
    model: ArticleContentTagModel[]
  ): Observable<ErrorExceptionResult<ArticleContentTagModel>> {
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
    model: ArticleContentTagModel[]
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
