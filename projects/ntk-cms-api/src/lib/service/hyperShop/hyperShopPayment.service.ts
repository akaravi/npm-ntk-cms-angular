import { Injectable } from '@angular/core';

import { HyperShopPaymentModel } from '../../models/entity/hyperShop/hyperShopPaymentModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class HyperShopPaymentService extends ApiCmsServerBase<HyperShopPaymentModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'HyperShopPayment';
  }

}
