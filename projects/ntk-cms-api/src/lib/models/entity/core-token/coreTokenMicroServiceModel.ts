import { EnumMicroServiceModuleType } from '../../enums/base/microServiceModuleTypeEnum';
import { EnumManageUserAccessUserTypes } from '../../enums/base/manageUserAccessUserTypesEnum';
import { EnumMicroServiceConnectionType } from '../../enums/base/microServiceConnectionTypeEnum';
import { EnumMicroServiceConnectionStatus } from '../../enums/base/microServiceConnectionStatusEnum';
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
