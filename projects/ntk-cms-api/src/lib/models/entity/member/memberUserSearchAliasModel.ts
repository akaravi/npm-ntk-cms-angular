import { BaseModuleEntity } from '../base/baseModuleEntity';
import { MemberUserGroupModel } from './memberUserGroupModel';
//@@tag-Version-2201011
export class MemberUserSearchAliasModel extends BaseModuleEntity<number> {
  linkCmsUserId: number;
  firstName: string;
  lastName: string;
  memberUserGroup: MemberUserGroupModel[];
}
