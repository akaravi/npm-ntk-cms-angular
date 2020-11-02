import { ApiCmsServerBase } from '../_base/apiCmsServerBase.service';
import { SmsMainApiPathProcessFlowLogModel } from '../../cmsModels/sms/SmsMainApiPathProcessFlowLogModel';

export class SmsMainApiPathProcessFlowLogService extends ApiCmsServerBase<SmsMainApiPathProcessFlowLogModel, number> {
  getModuleCotrolerUrl(): string {
    return 'SmsMainApiPathProcessFlowLog';
  }
}
