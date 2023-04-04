import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstatePropertySupplierCategoryModel } from '../../models/entity/estate/estatePropertySupplierCategoryModel';

@Injectable()
export class EstatePropertySupplierCategoryService extends ApiCmsServerBase<EstatePropertySupplierCategoryModel, string>  {
  getModuleControllerUrl(): string {
    return 'EstatePropertySupplierCategory';
  }

}
