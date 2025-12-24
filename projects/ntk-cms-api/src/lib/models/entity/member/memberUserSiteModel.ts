import { BaseModuleEntity } from '../base/baseModuleEntity';
import { MemberUserModel } from './memberUserModel';
//@@tag-Version-2201011
/**
 * سایت کاربر عضو
 */
export class MemberUserSiteModel extends BaseModuleEntity<number> {
  /** لینک به شناسه سایت CMS */
  linkCmsSiteId: number;

  /** لینک به شناسه کاربر عضو */
  linkMemberId: string;

  /** کاربر عضو */
  memberUser: MemberUserModel;
}
