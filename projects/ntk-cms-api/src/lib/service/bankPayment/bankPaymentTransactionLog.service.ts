import { BankPaymentTransactionLogModel } from '../../models/entity/bankPayment/bankPaymentTransactionLogModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

export class BankPaymentTransactionLogService
  extends ApiCmsServerBase<BankPaymentTransactionLogModel, number>
   {
  getModuleCotrolerUrl(): string {
    return 'BankPaymentTransactionLog';
  }
}
