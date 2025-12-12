import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { transactionAssistantSupplierModel } from '../../models/entity/transaction-assistant/transactionAssistantSupplierModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class TransactionAssistantSupplierService extends ApiCmsServerBase<
  transactionAssistantSupplierModel,
  string,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'TransactionAssistantSupplier';
  }
}
