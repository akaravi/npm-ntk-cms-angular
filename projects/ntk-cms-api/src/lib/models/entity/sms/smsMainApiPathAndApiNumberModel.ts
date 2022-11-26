import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsMainApiNumberModel } from './smsMainApiNumberModel';
//@@tag-Version-2201011
export class SmsMainApiPathAndApiNumberModel extends BaseModuleEntity<string> {
  linkApiPathId: string;
  linkApiNumberId: string;

  apiPath: SmsMainApiNumberModel;
  apiNumber: SmsMainApiNumberModel;
}
