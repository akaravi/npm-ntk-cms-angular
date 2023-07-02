
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { DonateTransactionModel } from '../../models/entity/donate/donateTransactionModel';
import { DonateModuleCalculateDtoModel } from '../../models/dto/donate/donateModuleCalculateDtoModel';
import { DonateModulePaymentDtoModel } from '../../models/dto/donate/donateModulePaymentDtoModel';
import { Observable } from 'rxjs';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { BankPaymentInjectPaymentGotoBankStep1CalculateModel } from '../../models/dto/bankPayment/bankPaymentInjectPaymentGotoBankStep1CalculateModel';
import { map, retry } from 'rxjs/operators';
import { BankPaymentInjectPaymentGotoBankStep2LandingSitePageModel } from '../../models/dto/bankPayment/bankPaymentInjectPaymentGotoBankStep2LandingSitePageModel';

@Injectable()
export class DonateTransactionService extends ApiCmsServerBase<DonateTransactionModel, number,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'DonateTransaction';
  }
  ServiceOrderCalculate(model: DonateModuleCalculateDtoModel):
  Observable<ErrorExceptionResult<BankPaymentInjectPaymentGotoBankStep1CalculateModel>> {
  if (!model) {
    model = new DonateModuleCalculateDtoModel();
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
ServiceOrderPayment(model: DonateModulePaymentDtoModel):
  Observable<ErrorExceptionResult<BankPaymentInjectPaymentGotoBankStep2LandingSitePageModel>> {
  if (!model) {
    model = new DonateModulePaymentDtoModel();
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
