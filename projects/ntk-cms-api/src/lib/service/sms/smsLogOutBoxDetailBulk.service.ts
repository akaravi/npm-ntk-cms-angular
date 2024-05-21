import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { SmsLogOutBoxDetailBulkModel } from '../../models/entity/sms/smsLogOutBoxDetailBulkModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class SmsLogOutBoxDetailBulkService extends ApiCmsServerBase<SmsLogOutBoxDetailBulkModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'SmsLogOutBoxDetailBulk';
  }
}
