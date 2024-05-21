import { ManageUserAccessAreaTypesEnum } from '../../enums/base/manageUserAccessAreaTypesEnum';
import { ManageUserAccessUserTypesEnum } from '../../enums/base/manageUserAccessUserTypesEnum';
import { NotificationConnectionStatusEnum } from '../../enums/base/notificationConnectionStatusEnum';
import { NotificationConnectionTypeEnum } from '../../enums/base/notificationConnectionTypeEnum';
import { NotificationTypeEnum } from '../../enums/base/notificationTypeEnum';
import { BaseEntity } from '../base/baseEntity';
//@@tag-Version-2201011
export class CoreTokenNotificationModel extends BaseEntity<string> {
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
