import { ApiCmsServerBase } from '../_base/apiCmsServerBase.service';
import { SmsLogOutBoxDetailBulkModel } from '../../cmsModels/sms/SmsLogOutBoxDetailBulkModel';

export class SmsLogOutBoxDetailBulkService extends ApiCmsServerBase<SmsLogOutBoxDetailBulkModel, number> {
  getModuleCotrolerUrl(): string {
    return 'SmsLogOutBoxDetailBulk';
  }
}
