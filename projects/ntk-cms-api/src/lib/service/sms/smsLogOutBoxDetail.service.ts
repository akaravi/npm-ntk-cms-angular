import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { SmsLogOutBoxDetailModel } from '../../models/entity/sms/smsLogOutBoxDetailModel';
import { Injectable } from '@angular/core';


@Injectable()
export class SmsLogOutBoxDetailService extends ApiCmsServerBase<SmsLogOutBoxDetailModel, string> {
  getModuleControllerUrl(): string {
    return 'SmsLogOutBoxDetail';
  }
}
