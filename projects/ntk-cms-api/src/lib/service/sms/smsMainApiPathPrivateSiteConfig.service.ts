import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { SmsMainApiPathPrivateSiteConfigModel } from '../../models/entity/sms/smsMainApiPathPrivateSiteConfigModel';
import { Injectable } from '@angular/core';


@Injectable()
export class SmsMainApiPathPrivateSiteConfigService extends ApiCmsServerBase<
  SmsMainApiPathPrivateSiteConfigModel,
  number
> {
  getModuleCotrolerUrl(): string {
    return 'SmsMainApiPathPrivateSiteConfig';
  }
}
