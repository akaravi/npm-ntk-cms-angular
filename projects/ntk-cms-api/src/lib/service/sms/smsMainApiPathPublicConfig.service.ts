import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { SmsMainApiPathPublicConfigModel } from '../../models/sms/smsMainApiPathPublicConfigModel';

export class SmsMainApiPathPublicConfigService extends ApiCmsServerBase<SmsMainApiPathPublicConfigModel, number> {
  getModuleCotrolerUrl(): string {
    return 'SmsMainApiPathPublicConfig';
  }
}
