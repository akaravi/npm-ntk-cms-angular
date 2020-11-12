import { BaseModuleEntity } from '../base/baseModuleEntity';

export class SmsMainApiPathPriceServiceModel extends BaseModuleEntity<number> {
  LinkApiPathId?: any;
  RegulatorNumber?: any;
  ServiceUnicodePrice: number;
  ServiceNormalPrice: number;
  UserUnicodePrice: number;
  UserNormalPrice: number;
  // tslint:disable-next-line: variable-name
  virtual_ApiPath?: any;
  ApiPath?: any;
}
