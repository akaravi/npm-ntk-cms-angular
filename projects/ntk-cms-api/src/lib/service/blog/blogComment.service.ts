import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { BlogCommentModel } from '../../models/entity/blog/blogCommentModel';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExcptionResultBase } from '../../models/entity/base/errorExcptionResultBase';

import { Injectable } from '@angular/core';


@Injectable()
export class BlogCommentService extends ApiCmsServerBase<BlogCommentModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'BlogComment';
  }


  ServiceLikeClick(Id: number): Observable<ErrorExcptionResultBase> {

    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/LikeClick/' + Id, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExcptionResultBase) => {
          return this.errorExcptionResultBaseCheck(ret);
        }),
      );
  }

  ServiceDisLikeClick(Id: number): Observable<ErrorExcptionResultBase> {

    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/DisLikeClick/' + Id, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExcptionResultBase) => {
          return this.errorExcptionResultBaseCheck(ret);
        }),
      );
  }
}
