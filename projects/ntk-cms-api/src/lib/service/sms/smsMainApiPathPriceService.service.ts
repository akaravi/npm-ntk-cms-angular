import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { SmsMainApiPathPriceServiceEstimateModel } from '../../models/dto/sms/smsMainApiPathPriceServiceEstimateModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { SmsMainApiPathPriceServiceModel } from '../../models/entity/sms/smsMainApiPathPriceServiceModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class SmsMainApiPathPriceServiceService extends ApiCmsServerBase<
  SmsMainApiPathPriceServiceModel,
  string,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'SmsMainApiPathPriceService';
  }
  ServiceGetApiPriceEstimate(
    linkApiId: string
  ): Observable<ErrorExceptionResult<SmsMainApiPathPriceServiceEstimateModel>> {
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
          return this.errorExceptionResultCheck(ret);
        })
      );
  }
}
