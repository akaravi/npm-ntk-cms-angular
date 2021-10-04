import { EnumMicroServiceType } from '../../enums/enumMicroServiceType';
import { EnumManageUserAccessUserTypes } from '../../enums/enumManageUserAccessUserTypes';
import { EnumMicroServiceConnectionType } from '../../enums/enumMicroServiceConnectionType';
import { EnumMicroServiceConnectionStatus } from '../../enums/enumMicroServiceConnectionStatus';
import { BaseEntity } from '../base/baseEntity';
export class CoreTokenMicroServiceModel extends BaseEntity<string>   {
    LinkUserId?: number;
    LinkSiteId?: number;
    DeviceId: string;
    DeviceType: EnumMicroServiceType;
    UserType: EnumManageUserAccessUserTypes;
    DeviceConnectionType: EnumMicroServiceConnectionType;
    DeviceConnectionState: EnumMicroServiceConnectionStatus;
    RequestDate: string;
    UsedUsername: string;
    IP: string;
    Description: string;
}
