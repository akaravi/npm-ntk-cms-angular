import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsLogOutBoxDetailBulkModel } from './smsLogOutBoxDetailBulkModel';
import { SmsLogOutBoxDetailModel } from './smsLogOutBoxDetailModel';

export class SmsLogOutBoxModel extends BaseModuleEntity<string> {
  RegisterDate: Date;
  SendDate: Date;
  DefaultApiNumber?: string;
  Message?: any;
  Memo?: any;
  Flash: number;
  CreditOverPlus: number;
  EngineTryToSendCount: number;
  IsAccepted: boolean;
  ReceiverNumberHidden: boolean;
  OutBoxType: number;
  OutBoxDetails?: SmsLogOutBoxDetailModel[];
  OutBoxDetailBulks?: SmsLogOutBoxDetailBulkModel[];
}
