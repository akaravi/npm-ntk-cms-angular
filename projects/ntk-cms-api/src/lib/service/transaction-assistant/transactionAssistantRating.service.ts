import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { transactionAssistantRatingModel } from '../../models/entity/transaction-assistant/transactionAssistantRatingModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class TransactionAssistantRatingService extends ApiCmsServerBase<
  transactionAssistantRatingModel,
  string,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'TransactionAssistantRating';
  }
}
