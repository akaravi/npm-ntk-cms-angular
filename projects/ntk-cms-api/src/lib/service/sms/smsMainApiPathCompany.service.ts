import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { SmsMainApiPathCompanyModel } from '../../models/entity/sms/smsMainApiCompanyModel';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class SmsMainApiPathCompanyService extends ApiCmsServerBase<SmsMainApiPathCompanyModel, string,FilterModel> {
  getModuleControllerUrl(): string {
    return 'SmsMainApiPathCompany';
  }
}
