import { BaseModuleEntity } from '../base/baseModuleEntity';
import { MemberUserGroupModel } from './memberUserGroupModel';
//@@tag-Version-2201011
export class MemberGroupModel extends BaseModuleEntity<number> {
  title: string;
  linkPropertyTypeId: number;

  memberUserGroup: MemberUserGroupModel[];
}


