
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstatePropertySupplierModel } from '../../models/entity/estate/estatePropertySupplierModel';

@Injectable()
export class EstatePropertySupplierService extends ApiCmsServerBase<EstatePropertySupplierModel, string>  {
  getModuleControllerUrl(): string {
    return 'EstatePropertySupplier';
  }
}
