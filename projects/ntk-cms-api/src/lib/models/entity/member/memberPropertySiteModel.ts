import { BaseModuleEntity } from '../base/baseModuleEntity';
import { MemberPropertyModel } from './memberPropertyModel';
//@@tag-Version-2201011
/**
 * سایت ویژگی عضو
 */
export class MemberPropertySiteModel extends BaseModuleEntity<number> {
  /** لینک به شناسه سایت CMS */
  linkCmsSiteId: number;

  /** لینک به شناسه ویژگی عضو */
  linkMemberPropertyId: number;
  /** ویژگی عضو */
  memberProperty: MemberPropertyModel[];

}
