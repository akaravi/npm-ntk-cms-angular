import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { SmsLogOutBoxDetailBulkModel } from '../../models/entity/sms/smsLogOutBoxDetailBulkModel';
import { Injectable } from '@angular/core';


@Injectable()
export class SmsLogOutBoxDetailBulkService extends ApiCmsServerBase<SmsLogOutBoxDetailBulkModel, number> {
  getModuleCotrolerUrl(): string {
    return 'SmsLogOutBoxDetailBulk';
  }
}
