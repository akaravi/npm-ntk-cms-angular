import { BaseModuleEntity } from '../base/baseModuleEntity';

export class SmsLogInBoxModel extends BaseModuleEntity<string> {
  ReceiverDate: Date;
  AnalysisDate: Date;
  SenderNumber?: any;
  ReceiverNumber?: any;
  ApiNumber: number;
  InBoxType?: any;
  Message?: any;
  IsAccepted: boolean;
  Credit: number;
  InBoxLocks?: any;
}
