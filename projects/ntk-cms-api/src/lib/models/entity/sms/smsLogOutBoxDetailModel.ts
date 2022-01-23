import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsLogOutBoxDetailLockModel } from './smsLogOutBoxDetailLockModel';
import { SmsLogOutBoxModel } from './smsLogOutBoxModel';

export class SmsLogOutBoxDetailModel extends BaseModuleEntity<string> {
  RecordDetailStatus: number;
  LinkOutBoxId: string;
  ReceiverNumber: string;
  Credit: number;
  SenderNumber: string;
  IsSended: boolean;
  GetApiOnSendInfo: string;
  GetApiOnSendIdentity: string;
  GetApiDeliveryStatus?: number;
  GetApiOnDeliveryInfo: string;
  UserDelete?: boolean;
  AdminuserDelete?: boolean;
  ApiNumber: string;
  // tslint:disable-next-line: variable-name
  virtual_OutBox: SmsLogOutBoxModel;
  OutBox: SmsLogOutBoxModel;
  OutBoxDetailLocks: SmsLogOutBoxDetailLockModel;
}
