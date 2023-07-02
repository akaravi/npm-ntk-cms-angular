import { BankPaymentTransactionLogModel } from '../../models/entity/bank-payment/bankPaymentTransactionLogModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class BankPaymentTransactionLogService
  extends ApiCmsServerBase<BankPaymentTransactionLogModel, number,FilterModel>
   {
  getModuleControllerUrl(): string {
    return 'BankPaymentTransactionLog';
  }
}
