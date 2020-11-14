import { UserTokenModel } from './userTokenModel';

export class CoreTokenUserBadLoginModel extends UserTokenModel {
  DeviceId: string;
  RequestDate: string;
  UsedUsername: string;
  UsedPwd: string;

}
