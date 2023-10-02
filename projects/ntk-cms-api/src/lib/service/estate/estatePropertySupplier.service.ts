
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstatePropertySupplierModel } from '../../models/entity/estate/estatePropertySupplierModel';
import { EstatePropertySupplierFilterModel } from '../../models/filters/estate/estatePropertySupplierFilterModel';


@Injectable()
export class EstatePropertySupplierService extends ApiCmsServerBase<EstatePropertySupplierModel, string, EstatePropertySupplierFilterModel>  {
  getModuleControllerUrl(): string {
    return 'EstatePropertySupplier';
  }
}
