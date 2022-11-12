import { EnumManageUserAccessAreaTypes } from '../../enums/base/enumManageUserAccessAreaTypes';
import { BaseEntity } from '../base/baseEntity';

export class CoreTokenUserBadLoginModel extends BaseEntity<string>  {
  userAccessAreaType: EnumManageUserAccessAreaTypes;
  deviceClientMAC: string;
  linkDeviceId?: number;
  linkApplicationId?: number;
  requestDate: string;
  usedUsername: string;
  usedPwd: string;
  linkUserId?: number;
  linkSiteId?: number;

  linkMemberId: string;
}
