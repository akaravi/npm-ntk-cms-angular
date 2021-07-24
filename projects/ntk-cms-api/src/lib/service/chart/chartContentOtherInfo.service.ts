import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { ChartContentOtherInfoModel } from '../../models/entity/chart/chartContentOtherInfoModel';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { map, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class ChartContentOtherInfoService extends ApiCmsServerBase<ChartContentOtherInfoModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'ChartContentOtherInfo';
  }
  ServiceAddBatch(model: ChartContentOtherInfoModel[]): Observable<ErrorExceptionResult<ChartContentOtherInfoModel>> {
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
  ServiceEditBatch(model: ChartContentOtherInfoModel[]): Observable<ErrorExceptionResult<ChartContentOtherInfoModel>> {
    if (model == null) {
      model = [];
    }
    return this.http
      .put(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/EditBatch', model, {
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

