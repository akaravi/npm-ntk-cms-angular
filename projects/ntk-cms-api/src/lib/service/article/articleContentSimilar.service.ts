import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { ArticleContentSimilarModel } from '../../models/entity/article/articleContentSimilarModel';

import { Injectable } from '@angular/core';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';


@Injectable()
export class ArticleContentSimilarService extends ApiCmsServerBase<ArticleContentSimilarModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'ArticleContentSimilar';
  }
  ServiceAddBatch(model: ArticleContentSimilarModel[]): Observable<ErrorExceptionResult<ArticleContentSimilarModel>> {
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
  ServiceDeleteBatch(model: ArticleContentSimilarModel[]): Observable<ErrorExceptionResult<ArticleContentSimilarModel>> {
    if (model == null) {
      model = [];
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/DeleteBatch', model, {
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



