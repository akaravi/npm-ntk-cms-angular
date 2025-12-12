import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { TransactionAssistantTagModel } from '../../models/entity/transaction-assistant/transactionAssistantTagModel';

@Injectable()
export class TransactionAssistantTagService extends ApiCmsServerBase<
  TransactionAssistantTagModel,
  string,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'TransactionAssistantTag';
  }
}
