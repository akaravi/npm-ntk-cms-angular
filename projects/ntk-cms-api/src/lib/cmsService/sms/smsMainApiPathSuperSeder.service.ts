import { ApiCmsServerBase } from '../_base/apiCmsServerBase.service';
import { SmsMainApiPathSuperSederModel } from '../../cmsModels/sms/SmsMainApiPathSuperSederModel';

export class SmsMainApiPathSuperSederService extends ApiCmsServerBase<SmsMainApiPathSuperSederModel, number> {
  getModuleCotrolerUrl(): string {
    return 'SmsMainApiPathSuperSeder';
  }
}
