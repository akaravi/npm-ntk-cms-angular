import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { TransactionAssistantRatingModel } from '../../models/entity/transaction-assistant/transactionAssistantRatingModel';

@Injectable()
export class TransactionAssistantRatingService extends ApiCmsServerBase<
  TransactionAssistantRatingModel,
  string,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'TransactionAssistantRating';
  }
}
