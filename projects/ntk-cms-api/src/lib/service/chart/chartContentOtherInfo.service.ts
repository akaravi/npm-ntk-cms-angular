import { ChartContentOtherInfoModel } from '../../models/entity/chart/chartContentOtherInfoModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class ChartContentOtherInfoService extends ApiCmsServerBase<ChartContentOtherInfoModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'ChartContentOtherInfo';
  }
  ServiceAddBatch(model: ChartContentOtherInfoModel[]): Observable<ErrorExceptionResult<ChartContentOtherInfoModel>> {
    if (model == null) {
      model = [];
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/AddBatch', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
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
      .put(this.getBaseUrl() + this.getModuleControllerUrl() + '/EditBatch', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
}

