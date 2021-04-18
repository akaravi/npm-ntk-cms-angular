import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { HyperShopOrderCalculateDtoModel } from '../../models/dto/hyperShop/hyperShopOrderCalculateDtoModel';
import { HyperShopOrderPaymentDtoModel } from '../../models/dto/hyperShop/hyperShopOrderPaymentDtoModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { HyperShopOrderModel } from '../../models/entity/hyper-shop/hyperShopOrderModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class HyperShopOrderService extends ApiCmsServerBase<HyperShopOrderModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'HyperShopOrder';
  }
  ServiceOrderAdd( ): Observable<ErrorExceptionResult<HyperShopOrderModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/LastOrder', {
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
  ServiceOrderPayment(model: HyperShopOrderPaymentDtoModel ): Observable<ErrorExceptionResult<HyperShopOrderModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/OrderPayment', {
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
  ServiceOrderCalculate(model: HyperShopOrderCalculateDtoModel ): Observable<ErrorExceptionResult<HyperShopOrderModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/OrderCalculate', {
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
