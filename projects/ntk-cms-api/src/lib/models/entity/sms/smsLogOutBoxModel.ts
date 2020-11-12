import { BaseModuleEntity } from '../base/baseModuleEntity';

export class SmsLogOutBoxModel extends BaseModuleEntity<number> {
  RegisterDate: Date;
  SendDate: Date;
  DefaultApiNumber?: any;
  Message?: any;
  Memo?: any;
  Flash: number;
  CreditOverPlus: number;
  EngineTryToSendCount: number;
  IsAccepted: boolean;
  ReceiverNumberHidden: boolean;
  OutBoxType: number;
  OutBoxDetails?: any;
  OutBoxDetailBulks?: any;
}
