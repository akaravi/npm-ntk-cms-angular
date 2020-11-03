import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { BankPaymentPublicConfigModel } from '../../models/BankPayment/bankPaymentPublicConfigModel';

export class BankPaymentPublicConfigService
  extends ApiCmsServerBase<BankPaymentPublicConfigModel, number>
   {
  getModuleCotrolerUrl(): string {
    return 'BankPaymentPublicConfig';
  }
}
