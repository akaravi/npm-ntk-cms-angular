import { BaseModuleEntity } from '../base/baseModuleEntity';

export class SmsLogOutBoxDetailModel extends BaseModuleEntity<number> {
  recordDetailStatus: number;
  linkOutBoxId?: any;
  receiverNumber?: any;
  credit: number;
  senderNumber?: any;
  isSended: boolean;
  getApiOnSendInfo?: any;
  getApiOnSendIdentity?: any;
  getApiDeliveryStatus?: any;
  getApiOnDeliveryInfo?: any;
  userDelete?: any;
  AdminuserDelete?: any;
  apiNumber: number;
  virtual_OutBox?: any;
  outBox?: any;
  outBoxDetailLocks?: any;
}
