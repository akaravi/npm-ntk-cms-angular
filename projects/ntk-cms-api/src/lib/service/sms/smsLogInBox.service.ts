import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { SmsLogInBoxModel } from '../../models/sms/smsLogInBoxModel';

export class SmsLogInBoxService extends ApiCmsServerBase<SmsLogInBoxModel, number> {
  getModuleCotrolerUrl(): string {
    return 'SmsLogInBox';
  }
}
