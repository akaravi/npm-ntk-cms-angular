import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { SmsMainApiPathPriceEstimateModel } from '../../models/dto/sms/smsMainApiPathPriceEstimateModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { SmsMainApiPathPaginationModel } from '../../models/entity/sms/smsMainApiPathPaginationModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class SmsMainApiPathPaginationService extends ApiCmsServerBase<
  SmsMainApiPathPaginationModel,
  string,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'SmsMainApiPathPagination';
  }
  ServiceGetApiPriceEstimate(
    linkApiId: string
  ): Observable<ErrorExceptionResult<SmsMainApiPathPriceEstimateModel>> {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/GetApiPriceEstimate/' +
          linkApiId,
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
