import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreModuleSaleInvoiceModel } from '../../models/entity/core-main/coreModuleSaleInvoiceModel';


@Injectable()
export class CoreModuleSaleInvoiceService extends ApiCmsServerBase<CoreModuleSaleInvoiceModel, number,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'CoreModuleSaleInvoice';
  }
}
