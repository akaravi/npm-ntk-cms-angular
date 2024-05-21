import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { SmsMainMessageContentModel } from '../../models/entity/sms/smsMainMessageContentModel';


@Injectable()
export class SmsMainMessageContentService extends ApiCmsServerBase<SmsMainMessageContentModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'SmsMainMessageContent';
  }
}
