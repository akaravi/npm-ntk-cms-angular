import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { SmsMainApiPathCompanyModel } from '../../models/entity/sms/smsMainApiCompanyModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class SmsMainApiPathCompanyService extends ApiCmsServerBase<SmsMainApiPathCompanyModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'SmsMainApiPathCompany';
  }
}
