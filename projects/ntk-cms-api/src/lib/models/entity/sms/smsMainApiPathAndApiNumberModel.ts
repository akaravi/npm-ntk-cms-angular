import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsMainApiNumberModel } from './smsMainApiNumberModel';

export class SmsMainApiPathAndApiNumberModel extends BaseModuleEntity<string> {
  LinkApiPathId: string;
  LinkApiNumberId: string;

  ApiPath: SmsMainApiNumberModel;
  ApiNumber: SmsMainApiNumberModel;
}
