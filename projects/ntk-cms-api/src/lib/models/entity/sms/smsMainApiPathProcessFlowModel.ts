
import { SmsProcessFlowRecordStatusEnum } from '../../enums/sms/smsProcessFlowRecordStatus.enum';
import { SmsProcessFlowSmsStatusEnum } from '../../enums/sms/smsProcessFlowSmsStatus.enum';
import { BaseModuleEntity } from '../base/baseModuleEntity';

export class SmsMainApiPathProcessFlowModel extends BaseModuleEntity<string> {
  ProcessFlowStatus: SmsProcessFlowRecordStatusEnum;
  SmsStatus: SmsProcessFlowSmsStatusEnum;
  LinkPrivateSiteConfigId: string;
  LinkUserId?: number;
  Amount: number;
  AmountPure: number;
  StampJsonValues: string;
  RequestBackUserFromSmsJsonValues: string;
  LastStatusMessage: string;
}
