import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { SmsLogInBoxModel } from '../../models/entity/sms/smsLogInBoxModel';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class SmsLogInBoxService extends ApiCmsServerBase<SmsLogInBoxModel, string,FilterModel> {
  getModuleControllerUrl(): string {
    return 'SmsLogInBox';
  }
}
