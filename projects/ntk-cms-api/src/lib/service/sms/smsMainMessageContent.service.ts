import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { SmsMainMessageContentModel } from '../../models/entity/sms/smsMainMessageContentModel';


@Injectable()
export class SmsMainMessageContentService extends ApiCmsServerBase<SmsMainMessageContentModel, string>  {
  getModuleControllerUrl(): string {
    return 'SmsMainMessageContent';
  }
}
