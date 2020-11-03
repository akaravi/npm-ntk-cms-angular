import { BaseModuleEntity } from '../base/baseModuleEntity';

export class SmsLogOutBoxModel extends BaseModuleEntity<number> {
  registerDate: string;
  sendDate: string;
  defaultApiNumber?: any;
  message?: any;
  memo?: any;
  flash: number;
  creditOverPlus: number;
  engineTryToSendCount: number;
  isAccepted: boolean;
  receiverNumberHidden: boolean;
  outBoxType: number;
  outBoxDetails?: any;
  outBoxDetailBulks?: any;
}
