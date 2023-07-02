import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { SmsLogApiPathModel } from '../../models/entity/sms/smsLogApiPathModel';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class SmsLogApiPathService extends ApiCmsServerBase<SmsLogApiPathModel, string,FilterModel> {
  getModuleControllerUrl(): string {
    return 'SmsLogApiPath';
  }
}
