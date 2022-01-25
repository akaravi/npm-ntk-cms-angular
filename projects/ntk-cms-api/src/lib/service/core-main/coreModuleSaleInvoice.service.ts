import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { CoreModuleSaleInvoiceModel } from '../../models/entity/core-main/coreModuleSaleInvoiceModel';


@Injectable()
export class CoreModuleSaleInvoiceService extends ApiCmsServerBase<CoreModuleSaleInvoiceModel, number>  {
  getModuleControllerUrl(): string {
    return 'CoreModuleSaleInvoice';
  }
}
