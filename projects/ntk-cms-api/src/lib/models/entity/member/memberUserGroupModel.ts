import { BaseModuleEntity } from '../base/baseModuleEntity';
import { MemberGroupModel } from './memberGroupModel';
import { MemberUserModel } from './memberUserModel';

export class MemberUserGroupModel extends BaseModuleEntity<number> {
  memberUser_Id: number;
  memberGroup_Id: number;
  // tslint:disable-next-line: variable-name
  virtual_MemberUser: MemberUserModel;

  // tslint:disable-next-line: variable-name
  virtual_MemberGroup: MemberGroupModel;
}
