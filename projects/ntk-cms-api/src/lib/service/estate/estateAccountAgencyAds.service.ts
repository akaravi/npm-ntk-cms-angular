
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { BankPaymentInjectPaymentGotoBankStep1CalculateModel } from '../../models/dto/bankPayment/bankPaymentInjectPaymentGotoBankStep1CalculateModel';
import { BankPaymentInjectPaymentGotoBankStep2LandingSitePageModel } from '../../models/dto/bankPayment/bankPaymentInjectPaymentGotoBankStep2LandingSitePageModel';
import { EstateModuleSaleAccountAgencyAdsCalculateDtoModel } from '../../models/dto/estate/estateModuleSaleAccountAgencyAdsCalculateDtoModel';
import { EstateModuleSaleAccountAgencyAdsPaymentDtoModel } from '../../models/dto/estate/estateModuleSaleAccountAgencyAdsPaymentDtoModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { EstateAccountAgencyAdsModel } from '../../models/entity/estate/estateAccountAgencyAdsModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class EstateAccountAgencyAdsService extends ApiCmsServerBase<EstateAccountAgencyAdsModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'EstateAccountAgencyAds';
  }
  ServiceOrderCalculate(model: EstateModuleSaleAccountAgencyAdsCalculateDtoModel):
    Observable<ErrorExceptionResult<BankPaymentInjectPaymentGotoBankStep1CalculateModel>> {
    if (!model) {
      model = new EstateModuleSaleAccountAgencyAdsCalculateDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/OrderCalculate', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
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
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/OrderPayment', model, {
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
