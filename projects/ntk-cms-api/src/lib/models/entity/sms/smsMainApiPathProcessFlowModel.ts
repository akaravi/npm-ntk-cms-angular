
import { SmsProcessFlowRecordStatusEnum } from '../../enums/sms/smsProcessFlowRecordStatus.enum';
import { SmsProcessFlowSmsStatusEnum } from '../../enums/sms/smsProcessFlowSmsStatus.enum';
import { BaseModuleEntity } from '../base/baseModuleEntity';

export class SmsMainApiPathProcessFlowModel extends BaseModuleEntity<string> {
  processFlowStatus: SmsProcessFlowRecordStatusEnum;
  smsStatus: SmsProcessFlowSmsStatusEnum;
  linkPrivateSiteConfigId: string;
  linkUserId?: number;
  amount: number;
  amountPure: number;
  stampJsonValues: string;
  requestBackUserFromSmsJsonValues: string;
  lastStatusMessage: string;
}
