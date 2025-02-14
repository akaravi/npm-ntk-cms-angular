import { ManageUserAccessAreaTypesEnum } from '../../enums/base/manageUserAccessAreaTypesEnum';
import { ManageUserAccessUserTypesEnum } from '../../enums/base/manageUserAccessUserTypesEnum';
import { ConnectionStatusEnum } from '../../enums/base/connectionStatusEnum';
import { ConnectionTypeEnum } from '../../enums/base/connectionTypeEnum';
import { NotificationTypeEnum } from '../../enums/base/notificationTypeEnum';
import { BaseEntity } from '../base/baseEntity';
//@@tag-Version-2201011
export class CoreTokenConnectionModel extends BaseEntity<string> {
  linkUserId?: number;
  linkSiteId?: number;
  linkAppId?: number;
  userToken: string;
  connectionId: string;
  deviceId: string;
  deviceType: NotificationTypeEnum;
  userType: ManageUserAccessUserTypesEnum;
  areaType: ManageUserAccessAreaTypesEnum;
  deviceConnectionType: ConnectionTypeEnum;
  deviceConnectionState: ConnectionStatusEnum;

  usedUsername: string;
  deviceIP: string;
  description: string;
}
