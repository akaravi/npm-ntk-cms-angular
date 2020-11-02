import { ApiCmsServerBase } from '../_base/apiCmsServerBase.service';
import { SmsMainApiPathCompanyModel } from '../../cmsModels/sms/smsMainApiCompanyModel';

export class SmsMainApiPathCompanyService extends ApiCmsServerBase<SmsMainApiPathCompanyModel, number> {
  getModuleCotrolerUrl(): string {
    return 'SmsMainApiPathCompany';
  }
}
