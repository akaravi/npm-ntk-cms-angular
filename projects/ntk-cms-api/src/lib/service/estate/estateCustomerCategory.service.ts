import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { EstateCustomerCategoryModel } from '../../models/entity/estate/estateCustomerCategoryModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class EstateCustomerCategoryService extends ApiCmsServerBase<EstateCustomerCategoryModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'EstateCustomerCategory';
  }

}
