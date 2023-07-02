import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { SmsMainApiPathPermissionModel } from '../../models/entity/sms/smsMainApiPathPermissionModel';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class SmsMainApiPathPermissionService extends ApiCmsServerBase<SmsMainApiPathPermissionModel, string,FilterModel> {
  getModuleControllerUrl(): string {
    return 'SmsMainApiPathPermission';
  }
}
