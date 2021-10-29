import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsMainApiPathProcessFlowModel } from './smsMainApiPathProcessFlowModel';
import { SmsMainApiPathPublicConfigModel } from './smsMainApiPathPublicConfigModel';

export class SmsMainApiPathPrivateSiteConfigModel extends BaseModuleEntity<string> {
  MaxProcessFlowAmount: number;
  MinProcessFlowAmount: number;
  FixFeeProcessFlowAmount: number;
  PercentFeeProcessFlowAmount: number;
  LinkPublicConfigId: number;
  PrivateConfigJsonValues: string;
  Memo: string;
  // tslint:disable-next-line: variable-name
  virtual_PublicConfig: SmsMainApiPathPublicConfigModel;
  ProcessFlow: SmsMainApiPathProcessFlowModel[];
}
