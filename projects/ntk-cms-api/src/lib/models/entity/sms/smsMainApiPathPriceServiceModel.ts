import { SmsMessageTypeEnum } from '../../enums/sms/smsMessageTypeEnum';
import { SmsOutBoxTypeEnum } from '../../enums/sms/smsOutBoxTypeEnum';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { SmsMainApiPathModel } from './smsMainApiPathModel';
//@@tag-Version-2201011
export class SmsMainApiPathPriceServiceModel extends BaseModuleEntity<string> {
  linkApiPathId: string;
  linkCoreUserId?: number;
  linkCoreSiteId?: number;
  linkCoreUserGroupId?: number;
  linkCoreSiteCategoryId?: number;

  regulatorNumberJson: string;
  regulatorNumberList: string[];

  servicePricePerPage: number;
  serviceMessageLengthPaginationJson: string;
  serviceMessageLengthPaginationList:number[];

  endUserPricePerPage: number;
  endUserMessageLengthPaginationJson: string;
  endUserMessageLengthPaginationList:number[];

  messageType: SmsMessageTypeEnum;

  outBoxTypeJson: string;
  outBoxTypeList: SmsOutBoxTypeEnum[];

  userVoicePrice: number;
  // tslint:disable-next-line: variable-name
  virtual_ApiPath: SmsMainApiPathModel;
  apiPath: SmsMainApiPathModel;
}
// export class MessageLengthPaginationModel {
//   pageCount: number;
//   messageMinLength: number;
//   messageMaxLength: number;
// }
