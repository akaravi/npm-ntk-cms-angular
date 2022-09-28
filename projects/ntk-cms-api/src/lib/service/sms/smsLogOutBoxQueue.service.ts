import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { SmsLogOutBoxQueueModel } from '../../models/entity/sms/smsLogOutBoxQueueModel';
import { Injectable } from '@angular/core';


@Injectable()
export class SmsLogOutBoxQueueService extends ApiCmsServerBase<SmsLogOutBoxQueueModel, string> {
  getModuleControllerUrl(): string {
    return 'SmsLogOutBoxQueue';
  }
}
