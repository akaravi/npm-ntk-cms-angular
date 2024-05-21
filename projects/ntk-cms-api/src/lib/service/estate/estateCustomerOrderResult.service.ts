import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { EstateCustomerOrderResultModel } from '../../models/entity/estate/estateCustomerOrderResultModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class EstateCustomerOrderResultService extends ApiCmsServerBase<EstateCustomerOrderResultModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'EstateCustomerOrderResult';
  }

}
