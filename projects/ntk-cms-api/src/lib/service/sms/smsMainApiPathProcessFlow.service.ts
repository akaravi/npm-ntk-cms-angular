import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { SmsMainApiPathProcessFlowModel } from '../../models/entity/sms/smsMainApiPathProcessFlowModel';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class SmsMainApiPathProcessFlowService extends ApiCmsServerBase<SmsMainApiPathProcessFlowModel, string,FilterModel> {
  getModuleControllerUrl(): string {
    return 'SmsMainApiPathProcessFlow';
  }
}
