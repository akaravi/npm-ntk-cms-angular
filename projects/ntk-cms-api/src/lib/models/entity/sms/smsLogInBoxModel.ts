import { BaseModuleEntity } from '../base/baseModuleEntity';

export class SmsLogInBoxModel extends BaseModuleEntity<string> {
  LinkPrivateConfigId: string;
  LinkApiNumberId: string;
  ReceiverDate: Date;
  AnalysisDate: Date;
  SenderNumber: string;
  ReceiverNumber: string;
  InBoxType: string;
  Message: string;
  IsRead: boolean;
  IsProcessed: boolean;
  Credit: number;
}
