import { BaseModuleEntity } from '../base/baseModuleEntity';

export class SmsLogOutBoxDetailBulkModel extends BaseModuleEntity<number> {
  lockDate: string;
  processType?: any;
  processid: number;
  processIdSecond?: any;
  virtual_OutBoxDetailBulk?: any;
  outBoxDetailBulk?: any;
}
