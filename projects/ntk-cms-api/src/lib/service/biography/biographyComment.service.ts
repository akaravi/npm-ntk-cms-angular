import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { BiographyCommentModel } from '../../models/entity/biography/biographyCommentModel';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';

import { Injectable } from '@angular/core';


@Injectable()
export class BiographyCommentService extends ApiCmsServerBase<BiographyCommentModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'BiographyComment';
  }


  ServiceLikeClick(Id: number): Observable<ErrorExceptionResultBase> {

    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/LikeClick/' + Id, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultBaseCheck(ret);
        }),
      );
  }

  ServiceDisLikeClick(Id: number): Observable<ErrorExceptionResultBase> {

    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/DisLikeClick/' + Id, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultBaseCheck(ret);
        }),
      );
  }
}
