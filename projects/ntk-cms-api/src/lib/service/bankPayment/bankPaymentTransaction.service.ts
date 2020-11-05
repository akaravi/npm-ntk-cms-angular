import { BankPaymentTransactionModel } from '../../models/entity/bankPayment/bankPaymentTransactionModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

export class BankPaymentTransactionService
  extends ApiCmsServerBase<BankPaymentTransactionModel, number>
   {
  getModuleCotrolerUrl(): string {
    return 'BankPaymentTransaction';
  }
}
