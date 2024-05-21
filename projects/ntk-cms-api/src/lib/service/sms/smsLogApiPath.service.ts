import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { SmsLogApiPathModel } from '../../models/entity/sms/smsLogApiPathModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class SmsLogApiPathService extends ApiCmsServerBase<SmsLogApiPathModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'SmsLogApiPath';
  }
}
