import { EnumSendSmsStatusType } from '../../enums/base/sendSmsStatusTypeEnum';
import { BaseEntity } from '../base/baseEntity';
//@@tag-Version-2201011
export class CoreLogSmsModel extends BaseEntity<string>{
  sendStatusType: EnumSendSmsStatusType;
  linkSiteId?: number;
  linkUserId?: number;
  linkMemberId: string;
  moduleName: string;
  moduleEntityName: string;
  moduleEntityId: string;

  fromNumber: string;
  toNumber: string;
  message: string;
  apiNumber?: number;
  returnApi: string;
}
