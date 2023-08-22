import { MicroServiceModuleTypeEnum } from '../../enums/base/microServiceModuleTypeEnum';
import { ManageUserAccessUserTypesEnum } from '../../enums/base/manageUserAccessUserTypesEnum';
import { MicroServiceConnectionTypeEnum } from '../../enums/base/microServiceConnectionTypeEnum';
import { MicroServiceConnectionStatusEnum } from '../../enums/base/microServiceConnectionStatusEnum';
import { BaseEntity } from '../base/baseEntity';
//@@tag-Version-2201011
export class CoreTokenMicroServiceModel extends BaseEntity<string>   {
    linkUserId?: number;
    linkSiteId?: number;
    deviceId: string;
    deviceType: MicroServiceModuleTypeEnum;
    userType: ManageUserAccessUserTypesEnum;
    deviceConnectionType: MicroServiceConnectionTypeEnum;
    deviceConnectionState: MicroServiceConnectionStatusEnum;
    requestDate: string;
    usedUsername: string;
    deviceIP: string;
    description: string;
}
