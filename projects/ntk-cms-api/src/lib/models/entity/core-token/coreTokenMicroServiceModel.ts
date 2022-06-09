import { EnumMicroServiceType } from '../../enums/enumMicroServiceType';
import { EnumManageUserAccessUserTypes } from '../../enums/enumManageUserAccessUserTypes';
import { EnumMicroServiceConnectionType } from '../../enums/enumMicroServiceConnectionType';
import { EnumMicroServiceConnectionStatus } from '../../enums/enumMicroServiceConnectionStatus';
import { BaseEntity } from '../base/baseEntity';
export class CoreTokenMicroServiceModel extends BaseEntity<string>   {
    linkUserId?: number;
    linkSiteId?: number;
    deviceId: string;
    deviceType: EnumMicroServiceType;
    userType: EnumManageUserAccessUserTypes;
    deviceConnectionType: EnumMicroServiceConnectionType;
    deviceConnectionState: EnumMicroServiceConnectionStatus;
    requestDate: string;
    usedUsername: string;
    iP: string;
    description: string;
}
