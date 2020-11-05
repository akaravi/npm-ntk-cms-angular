import { SmsMainCustomerNumberModel } from '../../models/entity/sms/smsMainCustomerNumberModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


export class SmsMainCustomerNumberService extends ApiCmsServerBase<SmsMainCustomerNumberModel, number> {
  getModuleCotrolerUrl(): string {
    return 'SmsMainCustomerNumber';
  }
}
