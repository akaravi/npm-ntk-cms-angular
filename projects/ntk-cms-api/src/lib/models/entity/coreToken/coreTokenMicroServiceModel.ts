import { EnumMicroServiceType } from '../../Enums/enumMicroServiceType';
import { EnumManageUserAccessControllerTypes } from '../../Enums/enumManageUserAccessControllerTypes';
import { EnumMicroServiceConnectionType } from '../../Enums/enumMicroServiceConnectionType';
import { EnumMicroServiceConnectionStatus } from '../../Enums/enumMicroServiceConnectionStatus';
import { BaseEntity } from '../base/baseEntity';
export class CoreTokenMicroServiceModel extends BaseEntity<string>   {
    LinkUserId?: number;
    LinkSiteId?: number;
    DeviceId: string;
    DeviceType: EnumMicroServiceType;
    UserType: EnumManageUserAccessControllerTypes;
    DeviceConnectionType: EnumMicroServiceConnectionType;
    DeviceConnectionState: EnumMicroServiceConnectionStatus;
    RequestDate: string;
    UsedUsername: string;
    IP: string;
    Description: string;
}
