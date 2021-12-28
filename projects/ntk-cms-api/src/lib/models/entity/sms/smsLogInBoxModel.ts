import { BaseModuleEntity } from '../base/baseModuleEntity';

export class SmsLogInBoxModel extends BaseModuleEntity<string> {
  ReceiverDate: Date;
  AnalysisDate: Date;
  SenderNumber?: any;
  ReceiverNumber?: any;
  LinkPublicConfigId: string;
  LinkPrivateConfigId: string;
  InBoxType?: any;
  Message?: any;
  IsAccepted: boolean;
  Credit: number;
  InBoxLocks?: any;
}
