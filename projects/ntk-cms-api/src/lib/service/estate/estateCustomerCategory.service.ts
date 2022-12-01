import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstateCustomerCategoryModel } from '../../models/entity/estate/estateCustomerCategoryModel';

@Injectable()
export class EstateCustomerCategoryService extends ApiCmsServerBase<EstateCustomerCategoryModel, string>  {
  getModuleControllerUrl(): string {
    return 'EstateCustomerCategory';
  }

}
