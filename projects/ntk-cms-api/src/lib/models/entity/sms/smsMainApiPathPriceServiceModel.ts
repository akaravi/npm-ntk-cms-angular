import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsMainApiPathModel } from './smsMainApiPathModel';

export class SmsMainApiPathPriceServiceModel extends BaseModuleEntity<string> {
  LinkApiPathId: string;
  RegulatorNumber: string;
  ServiceUnicodeMessagePrice: number;
  ServiceNormalMessagePrice: number;
  ServiceVoicePrice: number;
  UserUnicodeMessagePrice: number;
  UserNormalMessagePrice: number;
  UserVoicePrice: number;
  // tslint:disable-next-line: variable-name
  virtual_ApiPath: SmsMainApiPathModel;
  ApiPath: SmsMainApiPathModel;
}
