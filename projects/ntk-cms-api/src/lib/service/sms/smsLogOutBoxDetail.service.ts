import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { SmsLogOutBoxDetailModel } from '../../models/entity/sms/smsLogOutBoxDetailModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class SmsLogOutBoxDetailService extends ApiCmsServerBase<SmsLogOutBoxDetailModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'SmsLogOutBoxDetail';
  }
}
