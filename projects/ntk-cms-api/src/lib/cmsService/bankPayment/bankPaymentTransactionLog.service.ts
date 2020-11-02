import { ApiCmsServerBase } from '../_base/apiCmsServerBase.service';
import { BankPaymentTransactionLogModel } from '../../cmsModels/BankPayment/bankPaymentTransactionLogModel';

export class BankPaymentTransactionLogService
  extends ApiCmsServerBase<BankPaymentTransactionLogModel, number>
   {
  getModuleCotrolerUrl(): string {
    return 'BankPaymentTransactionLog';
  }
}
