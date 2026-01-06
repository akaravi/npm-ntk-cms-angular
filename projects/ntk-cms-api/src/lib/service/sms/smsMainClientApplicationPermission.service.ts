import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { SmsMainClientApplicationPermissionModel } from '../../models/entity/sms/smsMainClientApplicationPermissionModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

/**
 * سرویس مدیریت دسترسی‌های اپلیکیشن کلاینت به مسیر API
 */
@Injectable()
export class SmsMainClientApplicationPermissionService extends ApiCmsServerBase<
  SmsMainClientApplicationPermissionModel,
  string,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'SmsMainClientApplicationPermission';
  }
}

