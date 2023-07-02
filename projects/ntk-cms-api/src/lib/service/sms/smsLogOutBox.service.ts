import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { SmsLogOutBoxModel } from '../../models/entity/sms/smsLogOutBoxModel';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class SmsLogOutBoxService extends ApiCmsServerBase<SmsLogOutBoxModel, string,FilterModel> {
  getModuleControllerUrl(): string {
    return 'SmsLogOutBox';
  }
}
