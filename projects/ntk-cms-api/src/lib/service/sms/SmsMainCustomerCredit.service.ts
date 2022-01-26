import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { SmsMainCustomerCreditModel } from '../../models/entity/sms/smsMainCustomerCreditModel';


@Injectable()
export class SmsMainCustomerCreditService extends ApiCmsServerBase<SmsMainCustomerCreditModel, string> {
  getModuleControllerUrl(): string {
    return 'SmsMainCustomerCredit';
  }
}
