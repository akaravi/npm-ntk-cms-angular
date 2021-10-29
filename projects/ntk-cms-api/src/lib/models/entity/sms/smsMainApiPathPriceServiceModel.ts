import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsMainApiPathModel } from './smsMainApiPathModel';

export class SmsMainApiPathPriceServiceModel extends BaseModuleEntity<string> {
  LinkApiPathId: string;
  RegulatorNumber: string;
  ServiceUnicodePrice: number;
  ServiceNormalPrice: number;
  UserUnicodePrice: number;
  UserNormalPrice: number;
  // tslint:disable-next-line: variable-name
  virtual_ApiPath: SmsMainApiPathModel;
  ApiPath: SmsMainApiPathModel;
}
