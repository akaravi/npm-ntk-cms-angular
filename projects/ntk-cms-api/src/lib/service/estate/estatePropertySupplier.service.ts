
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { EstatePropertySupplierModel } from '../../models/entity/estate/estatePropertySupplierModel';

@Injectable()
export class EstatePropertySupplierService extends ApiCmsServerBase<EstatePropertySupplierModel, string,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'EstatePropertySupplier';
  }
}
