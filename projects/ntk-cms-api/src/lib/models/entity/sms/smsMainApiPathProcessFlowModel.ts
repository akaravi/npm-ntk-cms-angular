import { EnumProcessFlowRecordStatus } from '../../enums/sms/enumProcessFlowRecordStatus';
import { EnumProcessFlowSmsStatus } from '../../enums/sms/enumProcessFlowSmsStatus';
import { BaseModuleEntity } from '../base/baseModuleEntity';

export class SmsMainApiPathProcessFlowModel extends BaseModuleEntity<number> {
  ProcessFlowStatus: EnumProcessFlowRecordStatus;
  SmsStatus: EnumProcessFlowSmsStatus;
  LinkPrivateSiteConfigId: number;
  LinkUserId?: number;
  Amount: number;
  AmountPure: number;
  StampJsonValues: string;
  RequestBackUserFromSmsJsonValues: string;
  LastStatusMessage: string;
}
