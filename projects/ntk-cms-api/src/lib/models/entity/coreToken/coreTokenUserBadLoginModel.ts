import { UserTokenModel } from './userTokenModel';

export class CoreTokenUserBadLoginModel extends UserTokenModel {
  deviceId: string;
  requestDate: string;
  usedUsername: string;
  usedPwd: string;

}
