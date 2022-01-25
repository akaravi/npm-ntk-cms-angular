import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { ChartContentSimilarModel } from '../../models/entity/chart/chartContentSimilarModel';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';


@Injectable()
export class ChartContentSimilarService extends ApiCmsServerBase<ChartContentSimilarModel, number>  {
  getModuleControllerUrl(): string {
    return 'ChartContentSimilar';
  }
  ServiceAddBatch(model: ChartContentSimilarModel[]): Observable<ErrorExceptionResult<ChartContentSimilarModel>> {
    if (model == null) {
      model = [];
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/AddBatch', model, {
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
  ServiceDeleteBatch(model: ChartContentSimilarModel[]): Observable<ErrorExceptionResult<ChartContentSimilarModel>> {
    if (model == null) {
      model = [];
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/DeleteBatch', model, {
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


