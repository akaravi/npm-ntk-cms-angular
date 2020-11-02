import { ApiCmsServerBase } from '../_base/apiCmsServerBase.service';
import { SmsMainApiPathModel } from '../../cmsModels/sms/smsMainApiPathModel';

export class SmsMainApiPathService extends ApiCmsServerBase<SmsMainApiPathModel, number> {
  getModuleCotrolerUrl(): string {
    return 'SmsMainApiPath';
  }
}
