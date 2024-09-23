import { SendSmsStatusTypeEnum } from '../../enums/base/sendSmsStatusTypeEnum';
import { BaseEntity } from '../base/baseEntity';
//@@tag-Version-2201011
export class CoreLogEmailModel extends BaseEntity<string> {
  sendStatusType: SendSmsStatusTypeEnum;
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
