import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { transactionAssistantInvoiceModel } from '../../models/entity/transaction-assistant/transactionAssistantInvoiceModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class TransactionAssistantInvoiceService extends ApiCmsServerBase<
  transactionAssistantInvoiceModel,
  string,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'TransactionAssistantInvoice';
  }
}
