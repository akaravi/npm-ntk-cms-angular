import { Injectable } from '@angular/core';
import { BankPaymentTransactionLogModel } from '../../models/entity/bank-payment/bankPaymentTransactionLogModel';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class BankPaymentTransactionLogService
  extends ApiCmsServerBase<BankPaymentTransactionLogModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'BankPaymentTransactionLog';
  }
}
