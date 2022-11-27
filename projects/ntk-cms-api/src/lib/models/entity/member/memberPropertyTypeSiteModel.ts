import { BaseModuleEntity } from '../base/baseModuleEntity';
import { MemberPropertyTypeModel } from './memberPropertyTypeModel';
//@@tag-Version-2201011
export class MemberPropertyTypeSiteModel extends BaseModuleEntity<number> {
  linkCmsSiteId: number;

  linkMemberPropertyTypeId: number;
  memberPropertyType: MemberPropertyTypeModel;
}
