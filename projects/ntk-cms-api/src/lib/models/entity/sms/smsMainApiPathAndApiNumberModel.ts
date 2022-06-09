import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsMainApiNumberModel } from './smsMainApiNumberModel';

export class SmsMainApiPathAndApiNumberModel extends BaseModuleEntity<string> {
  linkApiPathId: string;
  linkApiNumberId: string;

  apiPath: SmsMainApiNumberModel;
  apiNumber: SmsMainApiNumberModel;
}
