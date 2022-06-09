import { EnumSendSmsStatusType } from '../../enums/enumSendSmsStatusType';
import { BaseEntity } from '../base/baseEntity';


export class CoreLogSmsModel extends BaseEntity<string>{
  sendStatusType: EnumSendSmsStatusType;
  linkSiteId?: number;
  linkUserId?: number;
  linkMemberUserId?: number;
  moduleName: string;
  moduleEntityName: string;
  moduleEntityId: string;

  fromNumber: string;
  toNumber: string;
  message: string;
  apiNumber?: number;
  returnApi: string;
}
