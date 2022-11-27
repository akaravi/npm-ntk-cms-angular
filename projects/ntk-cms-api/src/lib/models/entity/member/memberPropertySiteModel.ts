import { BaseModuleEntity } from '../base/baseModuleEntity';
import { MemberPropertyModel } from './memberPropertyModel';
//@@tag-Version-2201011
export class MemberPropertySiteModel extends BaseModuleEntity<number> {
  linkCmsSiteId: number;

  linkMemberPropertyId: number;
  memberProperty: MemberPropertyModel[];

}
