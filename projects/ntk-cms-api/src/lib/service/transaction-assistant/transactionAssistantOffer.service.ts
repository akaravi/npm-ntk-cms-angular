import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { TransactionAssistantSupplierOfferModel } from '../../models/entity/transaction-assistant/transactionAssistantSupplierOfferModel';

@Injectable()
export class TransactionAssistantOfferService extends ApiCmsServerBase<
  TransactionAssistantSupplierOfferModel,
  string,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'TransactionAssistantOffer';
  }
}
