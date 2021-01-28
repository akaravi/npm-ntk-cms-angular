import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { NewsContentSimilar } from '../../models/entity/news/newsContentSimilarModel';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';


@Injectable()
export class NewsContentSimilarService extends ApiCmsServerBase<NewsContentSimilar, number>  {


  getModuleCotrolerUrl(): string {
    return 'NewsContentSimilar';
  }
  ServiceAddBatch(model: NewsContentSimilar[]): Observable<ErrorExceptionResult<NewsContentSimilar>> {
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
