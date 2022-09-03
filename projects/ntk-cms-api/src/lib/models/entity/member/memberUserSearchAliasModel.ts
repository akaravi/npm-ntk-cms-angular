import { BaseModuleEntity } from '../base/baseModuleEntity';
import { MemberUserGroupModel } from './memberUserGroupModel';

export class MemberUserSearchAliasModel extends BaseModuleEntity<number> {
  linkCmsUserId: number;
  firstName: string;
  lastName: string;
  memberUserGroup: MemberUserGroupModel[];
}
