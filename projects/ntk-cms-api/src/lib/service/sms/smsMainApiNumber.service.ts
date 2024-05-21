import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { SmsMainApiNumberModel } from '../../models/entity/sms/smsMainApiNumberModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class SmsMainApiNumberService extends ApiCmsServerBase<SmsMainApiNumberModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'SmsMainApiNumber';
  }
}
