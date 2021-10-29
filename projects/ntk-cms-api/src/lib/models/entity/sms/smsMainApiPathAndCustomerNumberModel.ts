import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsMainCustomerNumberModel } from './smsMainCustomerNumberModel';

export class SmsMainApiPathAndCustomerNumberModel extends BaseModuleEntity<string> {
  LinkApiPathId: string;
  LinkCustomerNumberId: string;

  ApiPath: SmsMainCustomerNumberModel;
  CustomerNumber: SmsMainCustomerNumberModel;
}
