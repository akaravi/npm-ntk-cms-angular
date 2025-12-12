import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { TransactionAssistantProductModel } from '../../models/entity/transaction-assistant/transactionAssistantProductModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class TransactionAssistantProductService extends ApiCmsServerBase<
  TransactionAssistantProductModel,
  string,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'TransactionAssistantProduct';
  }
}
