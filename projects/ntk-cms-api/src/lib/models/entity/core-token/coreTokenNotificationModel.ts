import { NotificationTypeEnum } from '../../enums/base/notificationTypeEnum';
import { ManageUserAccessUserTypesEnum } from '../../enums/base/manageUserAccessUserTypesEnum';
import { NotificationConnectionTypeEnum } from '../../enums/base/notificationConnectionTypeEnum';
import { NotificationConnectionStatusEnum } from '../../enums/base/notificationConnectionStatusEnum';
import { BaseEntity } from '../base/baseEntity';
import { ManageUserAccessAreaTypesEnum } from '../../enums/base/manageUserAccessAreaTypesEnum';
//@@tag-Version-2201011
export class CoreTokenNotificationModel extends BaseEntity<string>   {
  linkUserId?: number;
  linkSiteId?: number;
  linkAppId?: number;
  userToken: string;
  connectionId: string;
  deviceId: string;
  deviceType: NotificationTypeEnum;
  userType: ManageUserAccessUserTypesEnum;
  areaType: ManageUserAccessAreaTypesEnum;
  deviceConnectionType: NotificationConnectionTypeEnum;
  deviceConnectionState: NotificationConnectionStatusEnum;

  usedUsername: string;
  deviceIP: string;
  description: string;
}
