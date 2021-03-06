import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { SmsMainApiPathPriceServiceModel } from '../../models/entity/sms/smsMainApiPathPriceServiceModel';
import { Injectable } from '@angular/core';


@Injectable()
export class SmsMainApiPathPriceServiceService extends ApiCmsServerBase<SmsMainApiPathPriceServiceModel, number> {
  getModuleCotrolerUrl(): string {
    return 'SmsMainApiPathPriceService';
  }
}
