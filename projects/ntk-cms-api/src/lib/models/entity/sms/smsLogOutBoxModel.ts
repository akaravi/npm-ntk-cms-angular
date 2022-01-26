import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsLogOutBoxDetailBulkModel } from './smsLogOutBoxDetailBulkModel';
import { SmsLogOutBoxDetailModel } from './smsLogOutBoxDetailModel';

export class SmsLogOutBoxModel extends BaseModuleEntity<string> {
  LinkPrivateConfigId: string;
  LinkApiNumberId: string;
  SendDate: Date;
  Message: string;
  Memo: string;
  Flash: number;
  CreditOverPlus: number;
  EngineTryToSendCount: number;
  IsAccepted: boolean;
  ReceiverNumberHidden: boolean;
  EngineApiAllowToChange: boolean;
  OutBoxType: number;
  OutBoxDetails?: SmsLogOutBoxDetailModel[];
  OutBoxDetailBulks?: SmsLogOutBoxDetailBulkModel[];
}
