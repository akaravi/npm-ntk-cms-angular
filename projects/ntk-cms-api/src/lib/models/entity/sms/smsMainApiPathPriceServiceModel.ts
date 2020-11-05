import { BaseModuleEntity } from '../base/baseModuleEntity';

export class SmsMainApiPathPriceServiceModel extends BaseModuleEntity<number> {
  linkApiPathId?: any;
  regulatorNumber?: any;
  serviceUnicodePrice: number;
  serviceNormalPrice: number;
  userUnicodePrice: number;
  userNormalPrice: number;
  // tslint:disable-next-line: variable-name
  virtual_ApiPath?: any;
  apiPath?: any;
}
