import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { EstateCustomerCategoryModel } from '../../models/entity/estate/estateCustomerCategoryModel';

@Injectable()
export class EstateCustomerCategoryService extends ApiCmsServerBase<EstateCustomerCategoryModel, string,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'EstateCustomerCategory';
  }

}
