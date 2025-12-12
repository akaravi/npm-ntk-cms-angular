import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { transactionAssistantSupplierOfferModel } from '../../models/entity/transaction-assistant/transactionAssistantSupplierOfferModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class TransactionAssistantOfferService extends ApiCmsServerBase<
  transactionAssistantSupplierOfferModel,
  string,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'TransactionAssistantOffer';
  }
}
