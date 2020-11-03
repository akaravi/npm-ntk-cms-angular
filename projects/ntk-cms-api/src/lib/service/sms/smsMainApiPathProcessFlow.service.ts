import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { SmsMainApiPathProcessFlowModel } from '../../models/sms/SmsMainApiPathProcessFlowModel';

export class SmsMainApiPathProcessFlowService extends ApiCmsServerBase<SmsMainApiPathProcessFlowModel, number> {
  getModuleCotrolerUrl(): string {
    return 'SmsMainApiPathProcessFlow';
  }
}
