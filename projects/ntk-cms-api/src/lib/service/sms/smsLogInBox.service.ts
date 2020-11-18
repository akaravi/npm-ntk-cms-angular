import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { SmsLogInBoxModel } from '../../models/entity/sms/smsLogInBoxModel';
import { Injectable } from '@angular/core';


@Injectable()
export class SmsLogInBoxService extends ApiCmsServerBase<SmsLogInBoxModel, number> {
  getModuleCotrolerUrl(): string {
    return 'SmsLogInBox';
  }
}
