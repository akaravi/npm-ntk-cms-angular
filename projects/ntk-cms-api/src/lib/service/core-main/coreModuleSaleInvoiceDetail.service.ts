import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreModuleSaleInvoiceDetailModel } from '../../models/entity/core-main/coreModuleSaleInvoiceDetailModel';


@Injectable()
export class CoreModuleSaleInvoiceDetailService extends ApiCmsServerBase<CoreModuleSaleInvoiceDetailModel, number,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'CoreModuleSaleInvoiceDetail';
  }
}
