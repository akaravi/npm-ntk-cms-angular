import { SmsMessageTypeEnum } from '../../enums/sms/smsMessageType.enum';
import { SmsOutBoxTypeEnum } from '../../enums/sms/smsOutBoxType.enum';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsMainApiPathModel } from './smsMainApiPathModel';

export class SmsMainApiPathPriceServiceModel extends BaseModuleEntity<string> {
  linkApiPathId: string;
  linkCoreUserId?: number;
  linkCoreSiteId?: number;
  linkCoreUserGroupId?: number;
  linkCoreSiteCategoryId?: number;
  regulatorNumber: string;
  servicePrice: number;
  endUserPrice: number;
  messageLength: number;
  messageType: SmsMessageTypeEnum;
  outBoxType: SmsOutBoxTypeEnum;
  userVoicePrice: number;
  // tslint:disable-next-line: variable-name
  virtual_ApiPath: SmsMainApiPathModel;
  apiPath: SmsMainApiPathModel;
}
