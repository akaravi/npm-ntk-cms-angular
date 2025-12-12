import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { TransactionAssistantSupplierModel } from '../../models/entity/transaction-assistant/transactionAssistantSupplierModel';

@Injectable()
export class TransactionAssistantSupplierService extends ApiCmsServerBase<
  TransactionAssistantSupplierModel,
  string,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'TransactionAssistantSupplier';
  }
}
