import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { SmsMainApiNumberPermissionModel } from '../../models/entity/sms/smsMainApiNumberPermissionModel';
import { Injectable } from '@angular/core';


@Injectable()
export class SmsMainApiNumberPermissionService extends ApiCmsServerBase<SmsMainApiNumberPermissionModel, string> {
  getModuleControllerUrl(): string {
    return 'SmsMainApiNumberPermission';
  }
}
