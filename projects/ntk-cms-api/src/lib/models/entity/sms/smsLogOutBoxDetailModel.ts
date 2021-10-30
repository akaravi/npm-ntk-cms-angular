import { BaseModuleEntity } from '../base/baseModuleEntity';

export class SmsLogOutBoxDetailModel extends BaseModuleEntity<string> {
  RecordDetailStatus: number;
  LinkOutBoxId: string;
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
  ApiNumber: string;
  // tslint:disable-next-line: variable-name
  virtual_OutBox?: any;
  OutBox?: any;
  OutBoxDetailLocks?: any;
}
