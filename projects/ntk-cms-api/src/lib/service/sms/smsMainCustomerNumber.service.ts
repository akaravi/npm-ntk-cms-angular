import { SmsMainCustomerNumberModel } from '../../models/entity/sms/smsMainCustomerNumberModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class SmsMainCustomerNumberService extends ApiCmsServerBase<SmsMainCustomerNumberModel, number> {
  getModuleCotrolerUrl(): string {
    return 'SmsMainCustomerNumber';
  }
}
