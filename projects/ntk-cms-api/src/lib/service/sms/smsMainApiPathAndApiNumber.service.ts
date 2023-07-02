import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { SmsMainApiPathSuperSederModel } from '../../models/entity/sms/smsMainApiPathSuperSederModel';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { SmsMainApiPathAndApiNumberModel } from '../../models/entity/sms/smsMainApiPathAndApiNumberModel';


@Injectable()
export class SmsMainApiPathAndApiNumberService extends ApiCmsServerBase<SmsMainApiPathAndApiNumberModel, string,FilterModel> {
  getModuleControllerUrl(): string {
    return 'SmsMainApiPathAndApiNumber';
  }
}
