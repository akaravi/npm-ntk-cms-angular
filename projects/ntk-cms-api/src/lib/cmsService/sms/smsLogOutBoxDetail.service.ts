import { ApiCmsServerBase } from '../_base/apiCmsServerBase.service';
import { SmsLogOutBoxDetailModel } from '../../cmsModels/sms/SmsLogOutBoxDetailModel';

export class SmsLogOutBoxDetailService extends ApiCmsServerBase<SmsLogOutBoxDetailModel, number> {
  getModuleCotrolerUrl(): string {
    return 'SmsLogOutBoxDetail';
  }
}
