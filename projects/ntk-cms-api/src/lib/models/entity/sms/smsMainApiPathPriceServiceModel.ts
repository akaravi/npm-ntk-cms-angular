import { SmsMessageTypeEnum } from '../../enums/sms/smsMessageType.enum';
import { SmsOutBoxTypeEnum } from '../../enums/sms/smsOutBoxType.enum';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsMainApiPathModel } from './smsMainApiPathModel';

export class SmsMainApiPathPriceServiceModel extends BaseModuleEntity<string> {
  LinkApiPathId: string;
  LinkCoreUserId?: number;
  LinkCoreSiteId?: number;
  LinkCoreUserGroupId?: number;
  LinkCoreSiteCategoryId?: number;
  RegulatorNumber: string;
  ServicePrice: number;
  EndUserPrice: number;
  MessageLength: number;
  MessageType: SmsMessageTypeEnum;
  OutBoxType: SmsOutBoxTypeEnum;
  UserVoicePrice: number;
  // tslint:disable-next-line: variable-name
  virtual_ApiPath: SmsMainApiPathModel;
  ApiPath: SmsMainApiPathModel;
}
