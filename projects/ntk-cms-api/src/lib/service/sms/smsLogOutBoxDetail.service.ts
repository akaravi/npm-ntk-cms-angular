import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { SmsLogOutBoxDetailModel } from '../../models/sms/smsLogOutBoxDetailModel';

export class SmsLogOutBoxDetailService extends ApiCmsServerBase<SmsLogOutBoxDetailModel, number> {
  getModuleCotrolerUrl(): string {
    return 'SmsLogOutBoxDetail';
  }
}
