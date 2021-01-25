import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { ArticleContentSimilar } from '../../models/entity/article/articleContentSimilar';

import { Injectable } from '@angular/core';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';


@Injectable()
export class ArticleContentSimilarService extends ApiCmsServerBase<ArticleContentSimilar, number>  {


  getModuleCotrolerUrl(): string {
    return 'ArticleContentSimilar';
  }
  ServiceAddBatch(model: ArticleContentSimilar[]): Observable<ErrorExceptionResult<ArticleContentSimilar>> {
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
}
