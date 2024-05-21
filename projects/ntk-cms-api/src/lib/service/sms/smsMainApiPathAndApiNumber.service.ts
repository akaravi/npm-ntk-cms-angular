import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { SmsMainApiPathAndApiNumberModel } from '../../models/entity/sms/smsMainApiPathAndApiNumberModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class SmsMainApiPathAndApiNumberService extends ApiCmsServerBase<SmsMainApiPathAndApiNumberModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'SmsMainApiPathAndApiNumber';
  }
}
