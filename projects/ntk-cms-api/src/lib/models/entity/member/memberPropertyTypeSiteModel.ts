import { BaseModuleEntity } from '../base/baseModuleEntity';
import { MemberPropertyTypeModel } from './memberPropertyTypeModel';

export class MemberPropertyTypeSiteModel extends BaseModuleEntity<number> {
  linkCmsSiteId: number;

  linkMemberPropertyTypeId: number;
  memberPropertyType: MemberPropertyTypeModel;
}
