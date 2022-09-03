import { BaseModuleEntity } from '../base/baseModuleEntity';
import { MemberUserGroupModel } from './memberUserGroupModel';

export class MemberGroupModel extends BaseModuleEntity<number> {
  title: string;
  linkPropertyTypeId: number;

  memberUserGroup: MemberUserGroupModel[];
}


