import {  Observable } from 'rxjs';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { retry, catchError, map } from 'rxjs/operators';
import { ChartCategoryModel } from '../../models/entity/chart/chartCategoryModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';


import { Injectable } from '@angular/core';


@Injectable()
export class ChartCategoryService extends ApiCmsServerBase<ChartCategoryModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'ChartCategory';
  }

  ServiceMove(OldId: number, NewId: number): Observable<ErrorExceptionResult<ChartCategoryModel>> {
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleCotrolerUrl() + '/Move',
        { Old: OldId, New: NewId },
        {
          headers: this.getHeaders(),
        },
      )
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
}
