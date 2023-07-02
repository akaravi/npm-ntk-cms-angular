import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { EstatePropertySupplierCategoryModel } from '../../models/entity/estate/estatePropertySupplierCategoryModel';

@Injectable()
export class EstatePropertySupplierCategoryService extends ApiCmsServerBase<EstatePropertySupplierCategoryModel, string,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'EstatePropertySupplierCategory';
  }

}
