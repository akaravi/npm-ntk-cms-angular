import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { SmsMainApiPathModel } from '../../models/entity/sms/smsMainApiPathModel';

export class SmsMainApiPathService extends ApiCmsServerBase<SmsMainApiPathModel, number> {
  getModuleCotrolerUrl(): string {
    return 'SmsMainApiPath';
  }
}
