import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsLogOutBoxDetailModel } from './smsLogOutBoxDetailModel';

export class SmsLogApiPathModel extends BaseModuleEntity<string> {
  linkApiPathId: string;
  linkOutBoxId:string;
  linkOutBoxDetailId:string;
  statusOutOfServiceActive: boolean;
  statusOutOfServiceExpire?: Date;
  statusNotStableActive: boolean;
  statusNotStableExpire?:Date;
  statusNotStableCount:number;
  statusInfo:string;
}
