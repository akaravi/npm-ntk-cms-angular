import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsMainApiPathModel } from './smsMainApiPathModel';

export class SmsMainApiPathCompanyModel extends BaseModuleEntity<string> {
  title: string;
  description: string;
  serviceAvailableCredit: number;
  serviceSumCredit: number;
  userAvailableCredit: number;
  userSumCredit: number;
  serviceCreditLastEdit: Date;
  userCreditLastEdit: Date;
  apiPaths: SmsMainApiPathModel[];
}
