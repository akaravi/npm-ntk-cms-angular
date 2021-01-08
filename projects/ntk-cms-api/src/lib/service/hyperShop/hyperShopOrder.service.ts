import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { BankPaymentOnlineTransactionModel } from '../../models/dto/bankPayment/bankPaymentOnlineTransactionModel';
import { HyperShopOrderPaymentDtoModel } from '../../models/dto/hyperShop/hyperShopOrderPaymentDtoModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { HyperShopOrderModel } from '../../models/entity/hyperShop/hyperShopOrderModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class HyperShopOrderService extends ApiCmsServerBase<HyperShopOrderModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'HyperShopOrder';
  }
  ServiceOrderAdd( model: HyperShopOrderModel): Observable<ErrorExceptionResult<HyperShopOrderModel>> {
    if (model == null) {
      model = new HyperShopOrderModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/OrderAdd/' , model, {
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
  ServiceOrderPayment( model: HyperShopOrderPaymentDtoModel): Observable<ErrorExceptionResult<BankPaymentOnlineTransactionModel>> {
    if (model == null) {
      model = new HyperShopOrderPaymentDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/OrderPayment/' , model, {
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
