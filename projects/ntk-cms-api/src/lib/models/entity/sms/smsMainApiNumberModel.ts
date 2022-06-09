import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsMainApiPathAndApiNumberModel } from './smsMainApiPathAndApiNumberModel';

export class SmsMainApiNumberModel extends BaseModuleEntity<string> {
  numberChar: string;
  firstSubmit: Date;
  usanceDate: Date;
  saleStatus: boolean;
  isPublic: boolean;
  priority?: number;
  apiPathAndApiNumbers: SmsMainApiPathAndApiNumberModel[];
}
