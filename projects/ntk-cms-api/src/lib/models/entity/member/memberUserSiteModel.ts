import { BaseModuleEntity } from '../base/baseModuleEntity';
import { MemberUserModel } from './memberUserModel';

export class MemberUserSiteModel extends BaseModuleEntity<number> {
  linkCmsSiteId: number;

  linkMemberId: string;

  memberUser: MemberUserModel;
}
