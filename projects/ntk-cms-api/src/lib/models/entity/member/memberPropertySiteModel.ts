import { BaseModuleEntity } from '../base/baseModuleEntity';
import { MemberPropertyModel } from './memberPropertyModel';

export class MemberPropertySiteModel extends BaseModuleEntity<number> {
  linkCmsSiteId: number;

  linkMemberPropertyId: number;
  memberProperty: MemberPropertyModel[];

}
