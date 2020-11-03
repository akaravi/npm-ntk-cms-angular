import { BaseEntity } from '../base/baseEntity';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsMainApiPathModel } from './smsMainApiPathModel';

export class SmsMainApiPathCompanyModel extends BaseModuleEntity<number> {
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
