import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { SmsMainApiPathModel } from '../../models/entity/sms/smsMainApiPathModel';
import { Injectable } from '@angular/core';


@Injectable()
export class SmsMainApiPathService extends ApiCmsServerBase<SmsMainApiPathModel, string> {
  getModuleCotrolerUrl(): string {
    return 'SmsMainApiPath';
  }
}
