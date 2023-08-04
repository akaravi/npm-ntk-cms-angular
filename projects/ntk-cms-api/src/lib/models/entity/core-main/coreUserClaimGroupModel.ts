import { EnumUserClaimGroupActionType } from '../../enums/core/userClaimGroupActionTypeEnum';
import { BaseEntity } from '../base/baseEntity';
import { CoreUserClaimGroupDetailModel } from './coreUserClaimGroupDetailModel';
//@@tag-Version-2201011
export class CoreUserClaimGroupModel extends BaseEntity<number> {
  title: string;
  titleML: string;
  titleResourceLanguage: string;
  description: string;
  linkModuleId?: number;
  linkSiteCategoryId?: number;
  linkApplicationId?: number;
  linkApplicationSourceId?: number;
  linkUserGroupId?: number;
  actionType: EnumUserClaimGroupActionType;
  userClaimGroupDetails: CoreUserClaimGroupDetailModel[];
}
