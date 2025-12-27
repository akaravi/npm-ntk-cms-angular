import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { SmsMainApiPathPricePermissionModel } from '../../models/entity/sms/smsMainApiPathPricePermissionModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class SmsMainApiPathPricePermissionService extends ApiCmsServerBase<
  SmsMainApiPathPricePermissionModel,
  string,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'SmsMainApiPathPricePermission';
  }
}
