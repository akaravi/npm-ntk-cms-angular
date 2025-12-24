import { BaseModuleEntity } from '../base/baseModuleEntity';
import { MemberGroupModel } from './memberGroupModel';
import { MemberUserModel } from './memberUserModel';
//@@tag-Version-2201011
/**
 * گروه کاربر عضو
 */
export class MemberUserGroupModel extends BaseModuleEntity<number> {
  /** شناسه کاربر عضو */
  memberUser_Id: number;
  /** شناسه گروه عضو */
  memberGroup_Id: number;
  // tslint:disable-next-line: variable-name
  virtual_MemberUser: MemberUserModel;

  // tslint:disable-next-line: variable-name
  virtual_MemberGroup: MemberGroupModel;
}
