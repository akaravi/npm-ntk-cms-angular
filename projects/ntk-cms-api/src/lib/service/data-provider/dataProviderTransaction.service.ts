
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { DataProviderTransactionModel } from '../../models/entity/data-provider/dataProviderTransactionModel';
import { DataProviderModuleCalculateDtoModel } from '../../models/dto/data-provider/dataProviderModuleCalculateDtoModel';
import { DataProviderModulePaymentDtoModel } from '../../models/dto/data-provider/dataProviderModulePaymentDtoModel';
import { Observable } from 'rxjs';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { BankPaymentInjectPaymentGotoBankStep1CalculateModel } from '../../models/dto/bankPayment/bankPaymentInjectPaymentGotoBankStep1CalculateModel';
import { map, retry } from 'rxjs/operators';
import { BankPaymentInjectPaymentGotoBankStep2LandingSitePageModel } from '../../models/dto/bankPayment/bankPaymentInjectPaymentGotoBankStep2LandingSitePageModel';

@Injectable()
export class DataProviderTransactionService extends ApiCmsServerBase<DataProviderTransactionModel, number>  {
  getModuleControllerUrl(): string {
    return 'DataProviderTransaction';
  }
  ServiceOrderCalculate(model: DataProviderModuleCalculateDtoModel):
  Observable<ErrorExceptionResult<BankPaymentInjectPaymentGotoBankStep1CalculateModel>> {
  if (!model) {
    model = new DataProviderModuleCalculateDtoModel();
  }
  return this.http
    .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/OrderCalculate', model, {
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
ServiceOrderPayment(model: DataProviderModulePaymentDtoModel):
  Observable<ErrorExceptionResult<BankPaymentInjectPaymentGotoBankStep2LandingSitePageModel>> {
  if (!model) {
    model = new DataProviderModulePaymentDtoModel();
  }
  return this.http
    .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/OrderPayment', model, {
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
