import { BaseModuleEntity } from '../base/baseModuleEntity';
import { MemberUserGroupModel } from './memberUserGroupModel';
//@@tag-Version-2201011
/**
 * گروه عضو
 */
export class MemberGroupModel extends BaseModuleEntity<number> {
  /** عنوان */
  title: string;
  /** لینک به شناسه نوع ویژگی عضو */
  linkPropertyTypeId: number;

  /** لیست گروه‌های کاربر عضو */
  memberUserGroup: MemberUserGroupModel[];
}


