import { ApiCmsServerBase } from '../_base/apiCmsServerBase.service';
import { SmsMainApiPathPrivateSiteConfigModel } from '../../cmsModels/sms/SmsMainApiPathPrivateSiteConfigModel';

export class SmsMainApiPathPrivateSiteConfigService extends ApiCmsServerBase<
  SmsMainApiPathPrivateSiteConfigModel,
  number
> {
  getModuleCotrolerUrl(): string {
    return 'SmsMainApiPathPrivateSiteConfig';
  }
}
