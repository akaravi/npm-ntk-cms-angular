import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { SmsMainClientPermissionModel } from '../../models/entity/sms/smsMainClientPermissionModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class SmsMainClientPermissionService extends ApiCmsServerBase<SmsMainClientPermissionModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'SmsMainClientPermission';
  }
}
