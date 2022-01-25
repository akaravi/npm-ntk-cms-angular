import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { SmsLogInBoxModel } from '../../models/entity/sms/smsLogInBoxModel';
import { Injectable } from '@angular/core';


@Injectable()
export class SmsLogInBoxService extends ApiCmsServerBase<SmsLogInBoxModel, string> {
  getModuleControllerUrl(): string {
    return 'SmsLogInBox';
  }
}
