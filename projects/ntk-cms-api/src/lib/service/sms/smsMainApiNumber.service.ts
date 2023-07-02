import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { SmsMainApiNumberModel } from '../../models/entity/sms/smsMainApiNumberModel';


@Injectable()
export class SmsMainApiNumberService extends ApiCmsServerBase<SmsMainApiNumberModel, string,FilterModel> {
  getModuleControllerUrl(): string {
    return 'SmsMainApiNumber';
  }
}
