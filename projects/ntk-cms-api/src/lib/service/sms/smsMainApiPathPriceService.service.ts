import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { SmsMainApiPathPriceServiceModel } from '../../models/entity/sms/smsMainApiPathPriceServiceModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class SmsMainApiPathPriceServiceService extends ApiCmsServerBase<SmsMainApiPathPriceServiceModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'SmsMainApiPathPriceService';
  }
}
