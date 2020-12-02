import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { HyperShopPaymentDtoModel } from '../../models/dto/hyperShop/hyperShopPaymentDtoModel';
import { ErrorExcptionResult } from '../../models/entity/base/errorExcptionResult';
import { HyperShopPaymentModel } from '../../models/entity/hyperShop/hyperShopPaymentModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class HyperShopPaymentService extends ApiCmsServerBase<HyperShopPaymentModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'HyperShopPayment';
  }
  ServicePaymentAdd( model: HyperShopPaymentDtoModel): Observable<ErrorExcptionResult<HyperShopPaymentDtoModel>> {
    if (model == null) {
      model = new HyperShopPaymentDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/PaymentAdd/' , model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExcptionResult<HyperShopPaymentDtoModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
}
