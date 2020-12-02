import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { BiographyCommentModel } from '../../models/entity/biography/biographyCommentModel';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExcptionResultBase } from '../../models/entity/base/errorExcptionResultBase';

import { Injectable } from '@angular/core';


@Injectable()
export class BiographyCommentService extends ApiCmsServerBase<BiographyCommentModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'BiographyComment';
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
