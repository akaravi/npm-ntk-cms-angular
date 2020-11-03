import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { SmsMainApiPathSuperSederModel } from '../../models/sms/smsMainApiPathSuperSederModel';

export class SmsMainApiPathSuperSederService extends ApiCmsServerBase<SmsMainApiPathSuperSederModel, number> {
  getModuleCotrolerUrl(): string {
    return 'SmsMainApiPathSuperSeder';
  }
}
