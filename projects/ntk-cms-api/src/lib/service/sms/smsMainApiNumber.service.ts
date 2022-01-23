import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { SmsMainApiNumberModel } from '../../models/entity/sms/smsMainApiNumberModel';


@Injectable()
export class SmsMainApiNumberService extends ApiCmsServerBase<SmsMainApiNumberModel, string> {
  getModuleCotrolerUrl(): string {
    return 'SmsMainApiNumber';
  }
}
