
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsMainApiPathModel } from './smsMainApiPathModel';

export class SmsMainApiPathSuperSederModel extends BaseModuleEntity<string> {
  linkApiPathId: string;
  linkApiPathSuperSederId: string;
  fromDate: Date;
  expireDate: Date;
  // tslint:disable-next-line: variable-name
  virtual_ApiPath: SmsMainApiPathModel;
  apiPath: SmsMainApiPathModel;
  // tslint:disable-next-line: variable-name
  virtual_ApiPathSuperSeder: SmsMainApiPathModel;
  apiPathSuperSeder: SmsMainApiPathModel;
}
