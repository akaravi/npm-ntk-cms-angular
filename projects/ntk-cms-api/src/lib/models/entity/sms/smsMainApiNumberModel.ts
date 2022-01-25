import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsMainApiPathAndApiNumberModel } from './smsMainApiPathAndApiNumberModel';

export class SmsMainApiNumberModel extends BaseModuleEntity<string> {
  NumberChar: string;
  FirstSubmit: Date;
  UsanceDate: Date;
  SaleStatus: boolean;
  IsPublic: boolean;
  Priority?: number;
  ApiPathAndApiNumbers: SmsMainApiPathAndApiNumberModel[];
}
