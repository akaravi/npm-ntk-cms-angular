import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { SmsMainApiPathProcessFlowLogModel } from '../../models/entity/sms/smsMainApiPathProcessFlowLogModel';
import { Injectable } from '@angular/core';


@Injectable()
export class SmsMainApiPathProcessFlowLogService extends ApiCmsServerBase<SmsMainApiPathProcessFlowLogModel, string> {
  getModuleControllerUrl(): string {
    return 'SmsMainApiPathProcessFlowLog';
  }
}
