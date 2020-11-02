import { ApiCmsServerBase } from '../_base/apiCmsServerBase.service';
import { SmsMainApiPathProcessFlowModel } from '../../cmsModels/sms/SmsMainApiPathProcessFlowModel';

export class SmsMainApiPathProcessFlowService extends ApiCmsServerBase<SmsMainApiPathProcessFlowModel, number> {
  getModuleCotrolerUrl(): string {
    return 'SmsMainApiPathProcessFlow';
  }
}
