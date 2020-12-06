import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { catchError, map, retry } from 'rxjs/operators';
import { SearchTagModel } from '../../models/entity/base/searchModel';
import { ArticleContentTagModel } from '../../models/entity/article/articleContentTagModel';
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';


@Injectable()
export class ArticleContentTagService extends ApiCmsServerBase<ArticleContentTagModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'ArticleContentTag';
  }

  ServiceSearchTag(model: SearchTagModel): Observable<ErrorExceptionResult<ArticleContentTagModel>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/SearchTag/', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExceptionResult<ArticleContentTagModel>) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
}
