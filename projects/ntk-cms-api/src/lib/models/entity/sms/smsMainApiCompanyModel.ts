import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsMainApiPathModel } from './smsMainApiPathModel';

export class SmsMainApiPathCompanyModel extends BaseModuleEntity<string> {
  Title: string;
  Description: string;
  ServiceAvailableCredit: number;
  ServiceSumCredit: number;
  UserAvailableCredit: number;
  UserSumCredit: number;
  ServiceCreditLastEdit: Date;
  UserCreditLastEdit: Date;
  ApiPaths: SmsMainApiPathModel[];
}
