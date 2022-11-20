import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstateCustomerOrderResultModel } from '../../models/entity/estate/estateCustomerOrderResultModel';

@Injectable()
export class EstateCustomerOrderResultService extends ApiCmsServerBase<EstateCustomerOrderResultModel, string>  {
  getModuleControllerUrl(): string {
    return 'EstateCustomerOrderResult';
  }

}
