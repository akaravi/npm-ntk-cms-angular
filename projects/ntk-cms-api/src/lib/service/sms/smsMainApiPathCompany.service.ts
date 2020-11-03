import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { SmsMainApiPathCompanyModel } from '../../models/sms/smsMainApiCompanyModel';

export class SmsMainApiPathCompanyService extends ApiCmsServerBase<SmsMainApiPathCompanyModel, number> {
  getModuleCotrolerUrl(): string {
    return 'SmsMainApiPathCompany';
  }
}
