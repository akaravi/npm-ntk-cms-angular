import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { SmsMainApiPathProcessFlowModel } from '../../models/entity/sms/smsMainApiPathProcessFlowModel';
import { Injectable } from '@angular/core';


@Injectable()
export class SmsMainApiPathProcessFlowService extends ApiCmsServerBase<SmsMainApiPathProcessFlowModel, string> {
  getModuleCotrolerUrl(): string {
    return 'SmsMainApiPathProcessFlow';
  }
}
