import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { transactionAssistantProductCategoryModel } from '../../models/entity/transaction-assistant/transactionAssistantProductCategoryModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class TransactionAssistantProductCategoryService extends ApiCmsServerBase<
  transactionAssistantProductCategoryModel,
  string,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'TransactionAssistantProductCategory';
  }
}
