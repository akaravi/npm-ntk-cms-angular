import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { SmsMainApiPathSuperSederModel } from '../../models/entity/sms/smsMainApiPathSuperSederModel';
import { Injectable } from '@angular/core';
import { SmsMainApiPathAndCustomerNumberModel } from '../../models/entity/sms/smsMainApiPathAndCustomerNumberModel';


@Injectable()
export class SmsMainApiPathAndCustomerNumberService extends ApiCmsServerBase<SmsMainApiPathAndCustomerNumberModel, string> {
  getModuleCotrolerUrl(): string {
    return 'SmsMainApiPathAndCustomerNumber';
  }
}
