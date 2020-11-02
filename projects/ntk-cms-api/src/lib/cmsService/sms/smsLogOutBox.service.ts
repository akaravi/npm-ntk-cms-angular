import { ApiCmsServerBase } from '../_base/apiCmsServerBase.service';
import { SmsLogOutBoxModel } from '../../cmsModels/sms/SmsLogOutBoxModel';

export class SmsLogOutBoxService extends ApiCmsServerBase<SmsLogOutBoxModel, number> {
  getModuleCotrolerUrl(): string {
    return 'SmsLogOutBox';
  }
}
