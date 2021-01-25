import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { catchError, map, retry } from 'rxjs/operators';
import { SearchTagModel } from '../../models/entity/base/searchModel';
import { NewsContentTagModel } from '../../models/entity/news/newsContentTagModel';
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';


@Injectable()
export class NewsContentTagService extends ApiCmsServerBase<NewsContentTagModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'NewsContentTag';
  }


  ServiceAddBatch(model: NewsContentTagModel[]): Observable<ErrorExceptionResult<NewsContentTagModel>> {
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



