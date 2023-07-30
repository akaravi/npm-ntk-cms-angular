import { EnumNotificationType } from '../../enums/base/enumNotificationType';
import { EnumManageUserAccessUserTypes } from '../../enums/base/enumManageUserAccessUserTypes';
import { EnumNotificationConnectionType } from '../../enums/base/enumNotificationConnectionType';
import { EnumNotificationConnectionStatus } from '../../enums/base/enumNotificationConnectionStatus';
import { BaseEntity } from '../base/baseEntity';
//@@tag-Version-2201011
export class CoreTokenNotificationModel extends BaseEntity<string>   {
    linkUserId?: number;
    linkSiteId?: number;
    deviceId: string;
    deviceType: EnumNotificationType;
    userType: EnumManageUserAccessUserTypes;
    deviceConnectionType: EnumNotificationConnectionType;
    deviceConnectionState: EnumNotificationConnectionStatus;
    requestDate: string;
    usedUsername: string;
    iP: string;
    description: string;
}
