import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { SmsMainCustomerNumberModel } from '../../models/entity/sms/smsMainCustomerNumberModel';


@Injectable()
export class SmsMainCustomerNumberService extends ApiCmsServerBase<SmsMainCustomerNumberModel, string> {
  getModuleCotrolerUrl(): string {
    return 'SmsMainCustomerNumber';
  }
}
