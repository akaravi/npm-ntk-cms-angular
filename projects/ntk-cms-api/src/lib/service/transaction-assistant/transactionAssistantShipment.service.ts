import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { TransactionAssistantOrderShipmentModel } from '../../models/entity/transaction-assistant/transactionAssistantOrderShipmentModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class TransactionAssistantShipmentService extends ApiCmsServerBase<
  TransactionAssistantOrderShipmentModel,
  string,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'TransactionAssistantShipment';
  }
}
