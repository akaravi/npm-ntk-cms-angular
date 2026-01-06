import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { SmsMainClientApplicationModel } from '../../models/entity/sms/smsMainClientApplicationModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class SmsMainClientApplicationService extends ApiCmsServerBase<
  SmsMainClientApplicationModel,
  string,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'SmsMainClientApplication';
  }
}

