import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { SmsMainApiNumberPermissionModel } from '../../models/entity/sms/smsMainApiNumberPermissionModel';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class SmsMainApiNumberPermissionService extends ApiCmsServerBase<SmsMainApiNumberPermissionModel, string,FilterModel> {
  getModuleControllerUrl(): string {
    return 'SmsMainApiNumberPermission';
  }
}
