
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstateAccountAgencyAdsModel } from '../../models/entity/estate/estateAccountAgencyAdsModel';
import { EstateModuleSaleAccountAgencyAdsPaymentDtoModel } from '../../models/dto/estate/estateModuleSaleAccountAgencyAdsPaymentDtoModel';
import { BankPaymentInjectPaymentGotoBankStep2LandingSitePageModel } from '../../models/dto/bankPayment/bankPaymentInjectPaymentGotoBankStep2LandingSitePageModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { EstateModuleSaleAccountAgencyAdsCalculateDtoModel } from '../../models/dto/estate/estateModuleSaleAccountAgencyAdsCalculateDtoModel';
import { BankPaymentInjectPaymentGotoBankStep1CalculateModel } from '../../models/dto/bankPayment/bankPaymentInjectPaymentGotoBankStep1CalculateModel';

@Injectable({
  providedIn: 'root',
})
export class EstateAccountAgencyAdsService extends ApiCmsServerBase<EstateAccountAgencyAdsModel, string>  {
  getModuleCotrolerUrl(): string {
    return 'EstateAccountAgencyAds';
  }
  ServiceOrderCalculate(model: EstateModuleSaleAccountAgencyAdsCalculateDtoModel):
    Observable<ErrorExceptionResult<BankPaymentInjectPaymentGotoBankStep1CalculateModel>> {
    if (!model) {
      model = new EstateModuleSaleAccountAgencyAdsCalculateDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/OrderCalculate', model, {
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
  ServiceOrderPayment(model: EstateModuleSaleAccountAgencyAdsPaymentDtoModel):
    Observable<ErrorExceptionResult<BankPaymentInjectPaymentGotoBankStep2LandingSitePageModel>> {
    if (!model) {
      model = new EstateModuleSaleAccountAgencyAdsPaymentDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/OrderPayment', model, {
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
