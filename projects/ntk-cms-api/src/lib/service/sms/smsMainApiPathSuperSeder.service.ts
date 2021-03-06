import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { SmsMainApiPathSuperSederModel } from '../../models/entity/sms/smsMainApiPathSuperSederModel';
import { Injectable } from '@angular/core';


@Injectable()
export class SmsMainApiPathSuperSederService extends ApiCmsServerBase<SmsMainApiPathSuperSederModel, number> {
  getModuleCotrolerUrl(): string {
    return 'SmsMainApiPathSuperSeder';
  }
}
