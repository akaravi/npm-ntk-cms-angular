import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsMainApiPathModel } from './smsMainApiPathModel';
//@@tag-Version-2201011
export class SmsMainApiPathCompanyModel extends BaseModuleEntity<string> {
  title: string;
  description: string;
  checkCredit: boolean;
  calculateCredit: boolean;
  serviceAvailableCredit: number;
  serviceSumCredit: number;
  userAvailableCredit: number;
  userSumCredit: number;
  serviceCreditLastEdit: Date;
  userCreditLastEdit: Date;
  apiPaths: SmsMainApiPathModel[];
}
