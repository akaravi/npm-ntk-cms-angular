import { SendNotificationStatusTypeEnum } from '../../enums/base/sendNotificationStatusTypeEnum';
import { BaseEntity } from '../base/baseEntity';
//@@tag-Version-2201011
export class CoreLogNotificationModel extends BaseEntity<string>{
  sendStatusType: SendNotificationStatusTypeEnum;
  linkSiteId?: number;
  linkMemberId: string;
  moduleName: string;
  moduleEntityName: string;
  moduleEntityId: string;
  fromlinkUserId: string;
  tolinkUserId: string;
  message: string;
  returnApi: string;
}
