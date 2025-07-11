
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { BankPaymentInjectPaymentGotoBankStep1CalculateModel } from '../../models/dto/bankPayment/bankPaymentInjectPaymentGotoBankStep1CalculateModel';
import { BankPaymentInjectPaymentGotoBankStep2LandingSitePageModel } from '../../models/dto/bankPayment/bankPaymentInjectPaymentGotoBankStep2LandingSitePageModel';
import { EstateModuleSalePropertyAdsCalculateDtoModel } from '../../models/dto/estate/estateModuleSalePropertyAdsCalculateDtoModel';
import { EstateModuleSalePropertyAdsPaymentDtoModel } from '../../models/dto/estate/estateModuleSalePropertyAdsPaymentDtoModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { EstatePropertyAdsModel } from '../../models/entity/estate/estatePropertyAdsModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class EstatePropertyAdsService extends ApiCmsServerBase<EstatePropertyAdsModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'EstatePropertyAds';
  }
  ServiceOrderCalculate(model: EstateModuleSalePropertyAdsCalculateDtoModel):
    Observable<ErrorExceptionResult<BankPaymentInjectPaymentGotoBankStep1CalculateModel>> {
    if (!model) {
      model = new EstateModuleSalePropertyAdsCalculateDtoModel();
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
  ServiceOrderPayment(model: EstateModuleSalePropertyAdsPaymentDtoModel):
    Observable<ErrorExceptionResult<BankPaymentInjectPaymentGotoBankStep2LandingSitePageModel>> {
    if (!model) {
      model = new EstateModuleSalePropertyAdsPaymentDtoModel();
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
