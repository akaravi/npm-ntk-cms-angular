import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { SmsMainApiPathPermissionModel } from '../../models/entity/sms/smsMainApiPathPermissionModel';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class SmsMainApiPathPermissionService extends ApiCmsServerBase<SmsMainApiPathPermissionModel, number> {
  getModuleCotrolerUrl(): string {
    return 'SmsMainApiPathPermission';
  }
}
