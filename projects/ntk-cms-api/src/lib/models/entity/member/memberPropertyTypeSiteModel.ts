import { BaseModuleEntity } from '../base/baseModuleEntity';
import { MemberPropertyTypeModel } from './memberPropertyTypeModel';
//@@tag-Version-2201011
/**
 * سایت نوع ویژگی عضو
 */
export class MemberPropertyTypeSiteModel extends BaseModuleEntity<number> {
  /** لینک به شناسه سایت CMS */
  linkCmsSiteId: number;

  /** لینک به شناسه نوع ویژگی عضو */
  linkMemberPropertyTypeId: number;
  /** نوع ویژگی عضو */
  memberPropertyType: MemberPropertyTypeModel;
}
