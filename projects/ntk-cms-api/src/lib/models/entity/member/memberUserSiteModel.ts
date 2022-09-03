import { MemberUserModel } from 'dist/ntk-cms-api/fesm2015/ntk-cms-api';
import { BaseModuleEntity } from '../base/baseModuleEntity';

export class MemberUserSiteModel extends BaseModuleEntity<number> {
  linkCmsSiteId: number;

  linkMemberUserId: number;

  memberUser: MemberUserModel;
}
