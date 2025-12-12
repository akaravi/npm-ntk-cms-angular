import { Injectable } from '@angular/core';
import { transactionAssistantProductModel } from '../../models/entity/transaction-assistant/transactionAssistantProductModel';
import { transactionAssistantProductServerSideFilterModel } from '../../models/filters/transaction-assistant/transactionAssistantProductServerSideFilterModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class TransactionAssistantProductService extends ApiCmsServerBase<
  transactionAssistantProductModel,
  string,
  transactionAssistantProductServerSideFilterModel
> {
  getModuleControllerUrl(): string {
    return 'TransactionAssistantProduct';
  }
}
