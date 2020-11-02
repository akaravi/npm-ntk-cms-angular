import { ApiCmsServerBase } from '../_base/apiCmsServerBase.service';
import { SmsLogInBoxModel } from '../../cmsModels/sms/smsLogInBoxModel';

export class SmsLogInBoxService extends ApiCmsServerBase<SmsLogInBoxModel, number> {
  getModuleCotrolerUrl(): string {
    return 'SmsLogInBox';
  }
}
