import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { SmsLogOutBoxModel } from '../../models/entity/sms/smsLogOutBoxModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class SmsLogOutBoxService extends ApiCmsServerBase<SmsLogOutBoxModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'SmsLogOutBox';
  }
}
