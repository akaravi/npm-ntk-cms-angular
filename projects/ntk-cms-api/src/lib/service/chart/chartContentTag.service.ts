import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { map, retry } from 'rxjs/operators';
import { ChartContentTagModel } from '../../models/entity/chart/chartContentTagModel';
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class ChartContentTagService extends ApiCmsServerBase<ChartContentTagModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'ChartContentTag';
  }


  ServiceAddBatch(model: ChartContentTagModel[]): Observable<ErrorExceptionResult<ChartContentTagModel>> {
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
  ServiceDeleteBatch(model: ChartContentTagModel[]): Observable<ErrorExceptionResult<ChartContentTagModel>> {
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



