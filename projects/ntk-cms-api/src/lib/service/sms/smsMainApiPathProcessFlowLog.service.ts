import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { SmsMainApiPathProcessFlowLogModel } from '../../models/entity/sms/smsMainApiPathProcessFlowLogModel';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class SmsMainApiPathProcessFlowLogService extends ApiCmsServerBase<SmsMainApiPathProcessFlowLogModel, string,FilterModel> {
  getModuleControllerUrl(): string {
    return 'SmsMainApiPathProcessFlowLog';
  }
}
