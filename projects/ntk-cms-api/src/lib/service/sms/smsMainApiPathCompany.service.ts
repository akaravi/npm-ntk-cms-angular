import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { SmsMainApiPathCompanyModel } from '../../models/entity/sms/smsMainApiCompanyModel';
import { Injectable } from '@angular/core';


@Injectable()
export class SmsMainApiPathCompanyService extends ApiCmsServerBase<SmsMainApiPathCompanyModel, number> {
  getModuleCotrolerUrl(): string {
    return 'SmsMainApiPathCompany';
  }
}
