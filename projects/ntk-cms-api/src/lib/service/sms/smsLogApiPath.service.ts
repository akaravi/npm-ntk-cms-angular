import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { SmsLogApiPathModel } from '../../models/entity/sms/smsLogApiPathModel';
import { Injectable } from '@angular/core';


@Injectable()
export class SmsLogApiPathService extends ApiCmsServerBase<SmsLogApiPathModel, string> {
  getModuleControllerUrl(): string {
    return 'SmsLogApiPath';
  }
}
