import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { SmsMainApiPathPrivateSiteConfigModel } from '../../models/sms/smsMainApiPathPrivateSiteConfigModel';

export class SmsMainApiPathPrivateSiteConfigService extends ApiCmsServerBase<
  SmsMainApiPathPrivateSiteConfigModel,
  number
> {
  getModuleCotrolerUrl(): string {
    return 'SmsMainApiPathPrivateSiteConfig';
  }
}
