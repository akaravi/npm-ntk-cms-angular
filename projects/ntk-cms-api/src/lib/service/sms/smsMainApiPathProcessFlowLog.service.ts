import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { SmsMainApiPathProcessFlowLogModel } from '../../models/entity/sms/smsMainApiPathProcessFlowLogModel';

export class SmsMainApiPathProcessFlowLogService extends ApiCmsServerBase<SmsMainApiPathProcessFlowLogModel, number> {
  getModuleCotrolerUrl(): string {
    return 'SmsMainApiPathProcessFlowLog';
  }
}
