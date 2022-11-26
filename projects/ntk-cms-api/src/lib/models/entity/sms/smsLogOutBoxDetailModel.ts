import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsLogApiPathModel } from './smsLogApiPathModel';
import { SmsLogOutBoxModel } from './smsLogOutBoxModel';
//@@tag-Version-2201011
export class SmsLogOutBoxDetailModel extends BaseModuleEntity<string> {
  recordDetailStatus: number;
  linkOutBoxId: string;
  linkApiPathId: string;
  linkApiNumberId: string;
  receiverNumber: string;
  credit: number;
  giveBackCredit: number;
  senderNumber: string;
  isSended: boolean;
  getApiOnSendInfo: string;
  getApiOnSendIdentity: string;
  getApiDeliveryStatus?: number;
  getApiOnDeliveryInfo: string;
  userDelete?: boolean;
  adminuserDelete?: boolean;


  // tslint:disable-next-line: variable-name
  virtual_OutBox: SmsLogOutBoxModel;
  outBox: SmsLogOutBoxModel;
  outBoxDetailLocks: SmsLogApiPathModel;
  slaLinkId: string;
  slaChanceCount: number;
}
