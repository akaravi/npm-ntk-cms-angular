
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsMainApiPathModel } from './smsMainApiPathModel';

export class SmsMainApiPathSuperSederModel extends BaseModuleEntity<string> {
  LinkApiPathId: string;
  LinkApiPathSuperSederId: string;
  FromDate: Date;
  EndDate: Date;
  // tslint:disable-next-line: variable-name
  virtual_ApiPath: SmsMainApiPathModel;
  ApiPath: SmsMainApiPathModel;
  // tslint:disable-next-line: variable-name
  virtual_ApiPathSuperSeder: SmsMainApiPathModel;
  ApiPathSuperSeder: SmsMainApiPathModel;
}
