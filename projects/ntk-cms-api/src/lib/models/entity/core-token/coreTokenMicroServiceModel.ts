import { EnumMicroServiceModuleType } from '../../enums/base/enumMicroServiceModuleType';
import { EnumManageUserAccessUserTypes } from '../../enums/base/enumManageUserAccessUserTypes';
import { EnumMicroServiceConnectionType } from '../../enums/base/enumMicroServiceConnectionType';
import { EnumMicroServiceConnectionStatus } from '../../enums/base/enumMicroServiceConnectionStatus';
import { BaseEntity } from '../base/baseEntity';
//@@tag-Version-2201011
export class CoreTokenMicroServiceModel extends BaseEntity<string>   {
    linkUserId?: number;
    linkSiteId?: number;
    deviceId: string;
    deviceType: EnumMicroServiceModuleType;
    userType: EnumManageUserAccessUserTypes;
    deviceConnectionType: EnumMicroServiceConnectionType;
    deviceConnectionState: EnumMicroServiceConnectionStatus;
    requestDate: string;
    usedUsername: string;
    iP: string;
    description: string;
}
