import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { BankPaymentOnlineTransactionModel } from '../../models/dto/bankPayment/bankPaymentOnlineTransactionModel';
import { HyperShopOrderDtoModel } from '../../models/dto/hyperShop/hyperShopOrderDtoModel';
import { HyperShopOrderPaymentDtoModel } from '../../models/dto/hyperShop/hyperShopOrderPaymentDtoModel';
import { ErrorExcptionResult } from '../../models/entity/base/errorExcptionResult';
import { HyperShopOrderModel } from '../../models/entity/hyperShop/hyperShopOrderModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class HyperShopOrderService extends ApiCmsServerBase<HyperShopOrderModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'HyperShopOrder';
  }
  ServiceOrderAdd( model: HyperShopOrderDtoModel): Observable<ErrorExcptionResult<HyperShopOrderDtoModel>> {
    if (model == null) {
      model = new HyperShopOrderDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/OrderAdd/' , model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExcptionResult<HyperShopOrderDtoModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
  ServiceOrderPayment( model: HyperShopOrderPaymentDtoModel): Observable<ErrorExcptionResult<BankPaymentOnlineTransactionModel>> {
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
        map((ret: ErrorExcptionResult<BankPaymentOnlineTransactionModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
}
