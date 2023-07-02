import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { SmsMainCustomerCreditModel } from '../../models/entity/sms/smsMainCustomerCreditModel';


@Injectable()
export class SmsMainCustomerCreditService extends ApiCmsServerBase<SmsMainCustomerCreditModel, string,FilterModel> {
  getModuleControllerUrl(): string {
    return 'SmsMainCustomerCredit';
  }
}
