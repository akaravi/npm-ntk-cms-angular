import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { SmsLogOutBoxModel } from '../../models/entity/sms/smsLogOutBoxModel';
import { Injectable } from '@angular/core';


@Injectable()
export class SmsLogOutBoxService extends ApiCmsServerBase<SmsLogOutBoxModel, string> {
  getModuleCotrolerUrl(): string {
    return 'SmsLogOutBox';
  }
}
