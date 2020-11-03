import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { SmsMainApiPathPriceServiceModel } from '../../models/sms/smsMainApiPathPriceServiceModel';

export class SmsMainApiPathPriceServiceService extends ApiCmsServerBase<SmsMainApiPathPriceServiceModel, number> {
  getModuleCotrolerUrl(): string {
    return 'SmsMainApiPathPriceService';
  }
}
