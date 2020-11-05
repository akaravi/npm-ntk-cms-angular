import { BaseModuleEntity } from '../base/baseModuleEntity';

export class SmsLogInBoxModel extends BaseModuleEntity<number> {
  receiverDate: string;
  analysisDate: string;
  senderNumber?: any;
  receiverNumber?: any;
  apiNumber: number;
  inBoxType?: any;
  message?: any;
  isAccepted: boolean;
  credit: number;
  inBoxLocks?: any;
}
