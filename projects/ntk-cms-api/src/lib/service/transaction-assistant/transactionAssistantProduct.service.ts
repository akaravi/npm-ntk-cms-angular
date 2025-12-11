import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { transactionAssistantProductViewModel } from '../../models/entity/transaction-assistant/transactionAssistantProductViewModel';
import { transactionAssistantProductClientSideFilterModel } from '../../models/filters/transaction-assistant/transactionAssistantProductClientSideFilterModel';
import { transactionAssistantProductServerSideFilterModel } from '../../models/filters/transaction-assistant/transactionAssistantProductServerSideFilterModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class TransactionAssistantProductService extends ApiCmsServerBase<
  transactionAssistantProductViewModel,
  string,
  transactionAssistantProductServerSideFilterModel
> {
  getModuleControllerUrl(): string {
    return 'TransactionAssistantProduct';
  }
}

