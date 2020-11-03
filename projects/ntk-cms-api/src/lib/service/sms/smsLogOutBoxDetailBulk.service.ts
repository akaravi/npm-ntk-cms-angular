import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { SmsLogOutBoxDetailBulkModel } from '../../models/sms/smsLogOutBoxDetailBulkModel';

export class SmsLogOutBoxDetailBulkService extends ApiCmsServerBase<SmsLogOutBoxDetailBulkModel, number> {
  getModuleCotrolerUrl(): string {
    return 'SmsLogOutBoxDetailBulk';
  }
}
