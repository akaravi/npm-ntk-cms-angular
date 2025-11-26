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
    message: string;
  pageCount: number;
  credit: number;
  creditDeliveryCostBase: boolean;
  serviceCredit: number;
  serviceCreditDeliveryCostBase: boolean;
  giveBackCredit: number;
  senderNumber: string;
  isSent: boolean;
  getApiOnSendInfo: string;
  getApiOnSendIdentity: string;
  getApiDeliveryStatus?: number;
  getApiDeliveryStatusTitle: string;
  recordDetailStatusTitle: string;
  getApiOnDeliveryInfo: string;
  userDelete?: boolean;
  adminuserDelete?: boolean;
  receiverNumberHidden: boolean;

  // tslint:disable-next-line: variable-name
  virtual_OutBox: SmsLogOutBoxModel;
  outBox: SmsLogOutBoxModel;
  outBoxDetailLocks: SmsLogApiPathModel;
  slaLinkId: string;
  slaChanceCount: number;
}
