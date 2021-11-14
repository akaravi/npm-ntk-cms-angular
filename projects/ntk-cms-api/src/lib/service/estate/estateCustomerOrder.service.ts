import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstateCustomerOrderModel } from '../../models/entity/estate/estateCustomerOrderModel';

@Injectable()
export class EstateCustomerOrderService extends ApiCmsServerBase<EstateCustomerOrderModel, string>  {
  getModuleCotrolerUrl(): string {
    return 'EstateCustomerOrder';
  }

}
