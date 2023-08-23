import { NotificationTypeEnum } from '../../enums/base/notificationTypeEnum';
import { ReceiverNotificationStatusTypeEnum } from '../../enums/base/receiverNotificationStatusTypeEnum';
import { SendNotificationStatusTypeEnum } from '../../enums/base/sendNotificationStatusTypeEnum';
import { BaseEntity } from '../base/baseEntity';
//@@tag-Version-2201011
export class CoreLogNotificationModel extends BaseEntity<string>{
  sendStatusType: SendNotificationStatusTypeEnum;
  receiverStatusType: ReceiverNotificationStatusTypeEnum;
  linkSiteId?: number;
  linkMemberId: string;
  moduleName: string;
  moduleEntityName: string;
  moduleEntityId: string;
  senderlinkUserId?: number;
  receiverlinkUserId?: number;
  returnApi: string;
  icon!: string;
  badge!: string;
  sound!: string;
  title!: string;
  clickAction!: string;
  renotify: boolean;
  contentType: NotificationTypeEnum;
  content: string;
  contentJson: string;
  contentJsonClass: string;
  smallImageId?: number;
  bigImageId?: number;

}
