import { BankPaymentTransactionModel } from '../../cmsModels/BankPayment/bankPaymentTransactionModel';
import { ApiCmsServerBase } from '../_base/apiCmsServerBase.service';

export class BankPaymentTransactionService
  extends ApiCmsServerBase<BankPaymentTransactionModel, number>
   {
  getModuleCotrolerUrl(): string {
    return 'BankPaymentTransaction';
  }
}
