import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { CoreModuleSaleInvoiceDetailModel } from '../../models/entity/core-main/coreModuleSaleInvoiceDetailModel';


@Injectable()
export class CoreModuleSaleInvoiceDetailService extends ApiCmsServerBase<CoreModuleSaleInvoiceDetailModel, number>  {
  getModuleControllerUrl(): string {
    return 'CoreModuleSaleInvoiceDetail';
  }
}
