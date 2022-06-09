import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsLogOutBoxDetailLockModel } from './smsLogOutBoxDetailLockModel';
import { SmsLogOutBoxModel } from './smsLogOutBoxModel';

export class SmsLogOutBoxDetailModel extends BaseModuleEntity<string> {
  recordDetailStatus: number;
  linkOutBoxId: string;
  receiverNumber: string;
  credit: number;
  senderNumber: string;
  isSended: boolean;
  getApiOnSendInfo: string;
  getApiOnSendIdentity: string;
  getApiDeliveryStatus?: number;
  getApiOnDeliveryInfo: string;
  userDelete?: boolean;
  adminuserDelete?: boolean;
  apiNumber: string;
  // tslint:disable-next-line: variable-name
  virtual_OutBox: SmsLogOutBoxModel;
  outBox: SmsLogOutBoxModel;
  outBoxDetailLocks: SmsLogOutBoxDetailLockModel;
}
