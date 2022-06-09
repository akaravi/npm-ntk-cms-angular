import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsLogOutBoxDetailModel } from './smsLogOutBoxDetailModel';

export class SmsLogOutBoxDetailLockModel extends BaseModuleEntity<string> {
  lockDate: Date;
  processType: string;
  defaultApiNumber?: string;
  processId: number;
  processIdSecond?: number;
  linkOutBoxDetailId: string;
  outBoxDetail: SmsLogOutBoxDetailModel;
  // tslint:disable-next-line: variable-name
  virtual_OutBoxDetail: SmsLogOutBoxDetailModel;
}
