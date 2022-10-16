import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsLogOutBoxDetailBulkModel } from './smsLogOutBoxDetailBulkModel';
import { SmsLogOutBoxDetailModel } from './smsLogOutBoxDetailModel';

export class SmsLogOutBoxModel extends BaseModuleEntity<string> {
  linkApiId: string;
  linkApiNumberId: string;
  sendDate: Date;
  message: string;
  memo: string;
  flash: number;
  creditOverPlus: number;
  engineTryToSendCount: number;
  isAccepted: boolean;
  receiverNumberHidden: boolean;
  engineApiAllowToChange: boolean;
  outBoxType: number;
  outBoxDetails?: SmsLogOutBoxDetailModel[];
  outBoxDetailBulks?: SmsLogOutBoxDetailBulkModel[];
}
