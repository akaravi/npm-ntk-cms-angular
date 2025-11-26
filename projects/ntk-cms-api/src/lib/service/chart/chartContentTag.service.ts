import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { ChartContentTagModel } from '../../models/entity/chart/chartContentTagModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';
import { FilterModel } from '../../models/entity/base/filterModel';

@Injectable()
export class ChartContentTagService extends ApiCmsServerBase<
  ChartContentTagModel,
  number,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'ChartContentTag';
  }

  ServiceAddBatch(
    model: ChartContentTagModel[]
  ): Observable<ErrorExceptionResult<ChartContentTagModel>> {
    if (model == null) {
      model = [];
    }
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/AddBatch',
        model,
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        retry(this.configApiRetry),

        map((ret: any) => {
          return ret;
        })
      );
  }
  ServiceDeleteBatch(
    model: ChartContentTagModel[]
  ): Observable<ErrorExceptionResultBase> {
    if (model == null) {
      model = [];
    }
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/DeleteBatch',
        model,
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        retry(this.configApiRetry),

        map((ret: any) => {
          return ret;
        })
      );
  }
}
