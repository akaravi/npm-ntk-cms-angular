import { BaseEntity } from '../base/baseEntity';
import { UserTokenModel } from './userTokenModel';

export class CoreTokenUserBadLoginModel extends BaseEntity<string>  {
  DeviceId: string;
  RequestDate: string;
  UsedUsername: string;
  UsedPwd: string;
  LinkUserId?: number;
  LinkSiteId?: number;
}
