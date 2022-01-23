import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { SmsMainApiPathSuperSederModel } from '../../models/entity/sms/smsMainApiPathSuperSederModel';
import { Injectable } from '@angular/core';
import { SmsMainApiPathAndApiNumberModel } from '../../models/entity/sms/smsMainApiPathAndApiNumberModel';


@Injectable()
export class SmsMainApiPathAndApiNumberService extends ApiCmsServerBase<SmsMainApiPathAndApiNumberModel, string> {
  getModuleCotrolerUrl(): string {
    return 'SmsMainApiPathAndApiNumber';
  }
}
