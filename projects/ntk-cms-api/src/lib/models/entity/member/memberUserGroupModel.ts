import { MemberUserModel } from 'dist/ntk-cms-api/fesm2015/ntk-cms-api';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { MemberGroupModel } from './memberGroupModel';

export class MemberUserGroupModel extends BaseModuleEntity<number> {
  memberUser_Id: number;
  memberGroup_Id: number;
  // tslint:disable-next-line: variable-name
  virtual_MemberUser: MemberUserModel;

  // tslint:disable-next-line: variable-name
  virtual_MemberGroup: MemberGroupModel;
}
