import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { BiographyContentSimilarModel } from '../../models/entity/biography/biographyContentSimilarModel';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { map, retry } from 'rxjs/operators';


@Injectable()
export class BiographyContentSimilarService extends ApiCmsServerBase<BiographyContentSimilarModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'BiographyContentSimilar';
  }
  ServiceAddBatch(model: BiographyContentSimilarModel[]): Observable<ErrorExceptionResult<BiographyContentSimilarModel>> {
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
  ServiceDeleteBatch(model: BiographyContentSimilarModel[]): Observable<ErrorExceptionResult<BiographyContentSimilarModel>> {
    if (model == null) {
      model = [];
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/DeleteBatch', model, {
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




