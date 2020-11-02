import { ApiCmsServerBase } from '../_base/apiCmsServerBase.service';
import { SmsMainApiPathPermissionModel } from '../../cmsModels/sms/SmsMainApiPathPermissionModel';

export class SmsMainApiPathPermissionService extends ApiCmsServerBase<SmsMainApiPathPermissionModel, number> {
  getModuleCotrolerUrl(): string {
    return 'SmsMainApiPathPermission';
  }
}
