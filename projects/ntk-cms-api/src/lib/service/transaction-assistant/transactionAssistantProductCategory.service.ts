import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { TransactionAssistantProductCategoryModel } from '../../models/entity/transaction-assistant/transactionAssistantProductCategoryModel';

@Injectable()
export class TransactionAssistantProductCategoryService extends ApiCmsServerBase<
  TransactionAssistantProductCategoryModel,
  string,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'TransactionAssistantProductCategory';
  }
}
