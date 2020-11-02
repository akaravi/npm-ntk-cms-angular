import { ApiCmsServerBase } from '../_base/apiCmsServerBase.service';
import { BankPaymentPublicConfigModel } from '../../cmsModels/BankPayment/bankPaymentPublicConfigModel';

export class BankPaymentPublicConfigService
  extends ApiCmsServerBase<BankPaymentPublicConfigModel, number>
   {
  getModuleCotrolerUrl(): string {
    return 'BankPaymentPublicConfig';
  }
}
