import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsMainApiPathAndApiNumberModel } from './smsMainApiPathAndApiNumberModel';

export class SmsMainApiNumberModel extends BaseModuleEntity<string> {
  NumberChar: string;
  FirstSubmit: Date;
  UsanceDate: Date;
  SaleStatus: boolean;
  LinkPathAndApiNumber: string;
  ApiPathAndApiNumbers: SmsMainApiPathAndApiNumberModel[];
}
