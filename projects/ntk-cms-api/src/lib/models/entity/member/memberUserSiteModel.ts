import { BaseModuleEntity } from '../base/baseModuleEntity';
import { MemberUserModel } from './memberUserModel';
//@@tag-Version-2201011
export class MemberUserSiteModel extends BaseModuleEntity<number> {
  linkCmsSiteId: number;

  linkMemberId: string;

  memberUser: MemberUserModel;
}
