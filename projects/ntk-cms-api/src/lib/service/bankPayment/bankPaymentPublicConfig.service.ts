import { BankPaymentPublicConfigModel } from '../../models/entity/bankPayment/bankPaymentPublicConfigModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

export class BankPaymentPublicConfigService
  extends ApiCmsServerBase<BankPaymentPublicConfigModel, number>
   {
  getModuleCotrolerUrl(): string {
    return 'BankPaymentPublicConfig';
  }
}
