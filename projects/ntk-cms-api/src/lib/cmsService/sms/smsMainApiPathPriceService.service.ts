import { ApiCmsServerBase } from '../_base/apiCmsServerBase.service';
import { SmsMainApiPathPriceServiceModel } from '../../cmsModels/sms/SmsMainApiPathPriceServiceModel';

export class SmsMainApiPathPriceServiceService extends ApiCmsServerBase<SmsMainApiPathPriceServiceModel, number> {
  getModuleCotrolerUrl(): string {
    return 'SmsMainApiPathPriceService';
  }
}
