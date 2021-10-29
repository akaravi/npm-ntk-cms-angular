import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsMainApiPathAndCustomerNumberModel } from './smsMainApiPathAndCustomerNumberModel';

export class SmsMainCustomerNumberModel extends BaseModuleEntity<string> {
  NumberChar: string;
  FirstSubmit: Date;
  UsanceDate: Date;
  SaleStatus: boolean;
  LinkPathAndCustomerNumber: string;
  ApiPathAndCustomerNumbers: SmsMainApiPathAndCustomerNumberModel[];
}
