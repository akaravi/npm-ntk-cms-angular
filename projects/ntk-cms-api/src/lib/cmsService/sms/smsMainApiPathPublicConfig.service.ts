import { ApiCmsServerBase } from '../_base/apiCmsServerBase.service';
import { SmsMainApiPathPublicConfigModel } from '../../cmsModels/sms/SmsMainApiPathPublicConfigModel';

export class SmsMainApiPathPublicConfigService extends ApiCmsServerBase<SmsMainApiPathPublicConfigModel, number> {
  getModuleCotrolerUrl(): string {
    return 'SmsMainApiPathPublicConfig';
  }
}
