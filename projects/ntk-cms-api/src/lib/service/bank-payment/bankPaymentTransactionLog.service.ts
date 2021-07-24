import { BankPaymentTransactionLogModel } from '../../models/entity/bank-payment/bankPaymentTransactionLogModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class BankPaymentTransactionLogService
  extends ApiCmsServerBase<BankPaymentTransactionLogModel, number>
   {
  getModuleCotrolerUrl(): string {
    return 'BankPaymentTransactionLog';
  }
}
