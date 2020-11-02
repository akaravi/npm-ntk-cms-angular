import { ApiCmsServerBase } from '../_base/apiCmsServerBase.service';
import { SmsMainCustomerNumberModel } from '../../cmsModels/sms/SmsMainCustomerNumberModel';

export class SmsMainCustomerNumberService extends ApiCmsServerBase<SmsMainCustomerNumberModel, number> {
  getModuleCotrolerUrl(): string {
    return 'SmsMainCustomerNumber';
  }
}
