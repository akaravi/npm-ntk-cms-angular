import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { BlogContentSimilarModel } from '../../models/entity/blog/blogContentSimilarModel';

import { Injectable } from '@angular/core';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';


@Injectable()
export class BlogContentSimilarService extends ApiCmsServerBase<BlogContentSimilarModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'BlogContentSimilar';
  }
  ServiceAddBatch(model: BlogContentSimilarModel[]): Observable<ErrorExceptionResult<BlogContentSimilarModel>> {
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
