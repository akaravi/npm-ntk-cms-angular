import { EnumMicroServiceType } from '../../Enums/enumMicroServiceType';
import { EnumManageUserAccessControllerTypes } from '../../Enums/enumManageUserAccessControllerTypes';
import { EnumMicroServiceConnectionType } from '../../Enums/enumMicroServiceConnectionType';
import { EnumMicroServiceConnectionStatus } from '../../Enums/enumMicroServiceConnectionStatus';
import { BaseEntity } from '../base/baseEntity';
export class CoreTokenMicroServiceModel extends BaseEntity<string>   {


    linkUserId?: number;
    linkSiteId?: number;
    deviceId: string;
    deviceType: EnumMicroServiceType;
    userType: EnumManageUserAccessControllerTypes;
    deviceConnectionType: EnumMicroServiceConnectionType;
    deviceConnectionState: EnumMicroServiceConnectionStatus;
    requestDate: string;
    usedUsername: string;
    iP: string;
    description: string;
}
