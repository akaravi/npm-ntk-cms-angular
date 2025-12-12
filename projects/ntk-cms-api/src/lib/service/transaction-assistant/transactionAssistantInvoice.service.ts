import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { TransactionAssistantInvoiceModel } from '../../models/entity/transaction-assistant/transactionAssistantInvoiceModel';

@Injectable()
export class TransactionAssistantInvoiceService extends ApiCmsServerBase<
  TransactionAssistantInvoiceModel,
  string,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'TransactionAssistantInvoice';
  }
}
