import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { BankPaymentInjectPaymentGotoBankStep1CalculateModel } from '../../models/dto/bankPayment/bankPaymentInjectPaymentGotoBankStep1CalculateModel';
import { BankPaymentInjectPaymentGotoBankStep2LandingSitePageModel } from '../../models/dto/bankPayment/bankPaymentInjectPaymentGotoBankStep2LandingSitePageModel';
import { HyperShopOrderCalculateDtoModel } from '../../models/dto/hyperShop/hyperShopOrderCalculateDtoModel';
import { HyperShopOrderPaymentDtoModel } from '../../models/dto/hyperShop/hyperShopOrderPaymentDtoModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { HyperShopOrderModel } from '../../models/entity/hyper-shop/hyperShopOrderModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class HyperShopOrderService extends ApiCmsServerBase<HyperShopOrderModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'HyperShopOrder';
  }
  ServiceOrderAdd(): Observable<ErrorExceptionResult<HyperShopOrderModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/LastOrder', {
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
  ServiceOrderCalculate(model: HyperShopOrderCalculateDtoModel):
    Observable<ErrorExceptionResult<BankPaymentInjectPaymentGotoBankStep1CalculateModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/OrderCalculate', {
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
  ServiceOrderPayment(model: HyperShopOrderPaymentDtoModel):
    Observable<ErrorExceptionResult<BankPaymentInjectPaymentGotoBankStep2LandingSitePageModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/OrderPayment', {
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
