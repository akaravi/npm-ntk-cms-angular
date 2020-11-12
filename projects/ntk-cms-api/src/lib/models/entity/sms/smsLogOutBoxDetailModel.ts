import { BaseModuleEntity } from '../base/baseModuleEntity';

export class SmsLogOutBoxDetailModel extends BaseModuleEntity<number> {
  RecordDetailStatus: number;
  LinkOutBoxId?: any;
  ReceiverNumber?: any;
  Credit: number;
  SenderNumber?: any;
  IsSended: boolean;
  GetApiOnSendInfo?: any;
  GetApiOnSendIdentity?: any;
  GetApiDeliveryStatus?: any;
  GetApiOnDeliveryInfo?: any;
  UserDelete?: any;
  AdminuserDelete?: any;
  ApiNumber: number;
  // tslint:disable-next-line: variable-name
  virtual_OutBox?: any;
  OutBox?: any;
  OutBoxDetailLocks?: any;
}
