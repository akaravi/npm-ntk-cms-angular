import { BaseModuleEntity } from '../base/baseModuleEntity';

export class SmsLogInBoxModel extends BaseModuleEntity<string> {
  ReceiverDate: Date;
  AnalysisDate: Date;
  SenderNumber: string;
  ReceiverNumber: string;
  LinkPublicConfigId: string;
  LinkPrivateConfigId: string;
  InBoxType: string;
  Message: string;
  IsRead: boolean;
  IsProcessed: boolean;
  Credit: number;
}
