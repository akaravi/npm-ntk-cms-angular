import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { EstateCustomerOrderResultModel } from '../../models/entity/estate/estateCustomerOrderResultModel';

@Injectable()
export class EstateCustomerOrderResultService extends ApiCmsServerBase<EstateCustomerOrderResultModel, string,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'EstateCustomerOrderResult';
  }

}
