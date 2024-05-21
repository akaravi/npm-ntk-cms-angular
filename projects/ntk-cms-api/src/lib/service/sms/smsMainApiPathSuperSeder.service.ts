import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { SmsMainApiPathSuperSederModel } from '../../models/entity/sms/smsMainApiPathSuperSederModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class SmsMainApiPathSuperSederService extends ApiCmsServerBase<SmsMainApiPathSuperSederModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'SmsMainApiPathSuperSeder';
  }
}
