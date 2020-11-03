import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { SmsMainApiPathPermissionModel } from '../../models/sms/smsMainApiPathPermissionModel';

export class SmsMainApiPathPermissionService extends ApiCmsServerBase<SmsMainApiPathPermissionModel, number> {
  getModuleCotrolerUrl(): string {
    return 'SmsMainApiPathPermission';
  }
}
