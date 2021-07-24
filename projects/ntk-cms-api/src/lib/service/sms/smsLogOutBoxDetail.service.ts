import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { SmsLogOutBoxDetailModel } from '../../models/entity/sms/smsLogOutBoxDetailModel';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class SmsLogOutBoxDetailService extends ApiCmsServerBase<SmsLogOutBoxDetailModel, number> {
  getModuleCotrolerUrl(): string {
    return 'SmsLogOutBoxDetail';
  }
}
