import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { SmsMainApiNumberPermissionModel } from '../../models/entity/sms/smsMainApiNumberPermissionModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class SmsMainApiNumberPermissionService extends ApiCmsServerBase<SmsMainApiNumberPermissionModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'SmsMainApiNumberPermission';
  }
}
