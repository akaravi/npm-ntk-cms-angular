import { EnumNotificationType } from '../../enums/base/enumNotificationType';
import { EnumManageUserAccessUserTypes } from '../../enums/base/enumManageUserAccessUserTypes';
import { EnumNotificationConnectionType } from '../../enums/base/enumNotificationConnectionType';
import { EnumNotificationConnectionStatus } from '../../enums/base/enumNotificationConnectionStatus';
import { BaseEntity } from '../base/baseEntity';
import { EnumManageUserAccessAreaTypes } from '../../enums/base/enumManageUserAccessAreaTypes';
//@@tag-Version-2201011
export class CoreTokenNotificationModel extends BaseEntity<string>   {
    linkUserId?: number;
    linkSiteId?: number;
    linkAppId?:number;
    userToken:string;
    connectionId:string;
    deviceId: string;
    deviceType: EnumNotificationType;
    userType: EnumManageUserAccessUserTypes;
    areaType: EnumManageUserAccessAreaTypes;
    deviceConnectionType: EnumNotificationConnectionType;
    deviceConnectionState: EnumNotificationConnectionStatus;
    
    usedUsername: string;
    iP: string;
    description: string;
}
