import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { ErrorExcptionResult } from '../../models/entity/base/errorExcptionResult';
import { catchError, map, retry } from 'rxjs/operators';
import { SearchTagModel } from '../../models/entity/base/searchModel';
import { BlogContentTagModel } from '../../models/entity/blog/blogContentTagModel';
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';


@Injectable()
export class BlogContentTagService extends ApiCmsServerBase<BlogContentTagModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'BlogContentTag';
  }

  ServiceSearchTag(model: SearchTagModel): Observable<ErrorExcptionResult<BlogContentTagModel>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/SearchTag/', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExcptionResult<BlogContentTagModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
}
