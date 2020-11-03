import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { BankPaymentTransactionLogModel } from '../../models/bankPayment/bankPaymentTransactionLogModel';

export class BankPaymentTransactionLogService
  extends ApiCmsServerBase<BankPaymentTransactionLogModel, number>
   {
  getModuleCotrolerUrl(): string {
    return 'BankPaymentTransactionLog';
  }
}
