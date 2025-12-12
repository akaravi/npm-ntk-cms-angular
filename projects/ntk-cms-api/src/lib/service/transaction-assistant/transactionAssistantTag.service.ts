import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { transactionAssistantTagModel } from '../../models/entity/transaction-assistant/transactionAssistantTagModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class TransactionAssistantTagService extends ApiCmsServerBase<
  transactionAssistantTagModel,
  string,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'TransactionAssistantTag';
  }
}
