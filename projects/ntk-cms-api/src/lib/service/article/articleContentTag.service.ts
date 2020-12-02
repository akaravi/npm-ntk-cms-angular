import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { ErrorExcptionResult } from '../../models/entity/base/errorExcptionResult';
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

  ServiceSearchTag(model: SearchTagModel): Observable<ErrorExcptionResult<ArticleContentTagModel>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/SearchTag/', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExcptionResult<ArticleContentTagModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
}
