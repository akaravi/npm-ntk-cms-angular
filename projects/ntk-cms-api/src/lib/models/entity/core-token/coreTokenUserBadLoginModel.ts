import { EnumManageUserAccessAreaTypes } from '../../enums/enumManageUserAccessAreaTypes';
import { BaseEntity } from '../base/baseEntity';

export class CoreTokenUserBadLoginModel extends BaseEntity<string>  {
  UserAccessAreaType: EnumManageUserAccessAreaTypes;
  DeviceClientMAC: string;
  LinkDeviceId?: number;
  LinkApplicationId?: number;
  RequestDate: string;
  UsedUsername: string;
  UsedPwd: string;
  LinkUserId?: number;
  LinkSiteId?: number;
  LinkMemberUserId?: number;
}
