import { EnumUserClaimGroupActionType } from '../../enums/core/enumUserClaimGroupActionType';
import { BaseEntity } from '../base/baseEntity';
import { CoreUserClaimGroupDetailModel } from './coreUserClaimGroupDetailModel';

export class CoreUserClaimGroupModel extends BaseEntity<number> {
  Title: string;
  Description: string;
  LinkModuleId?: number;
  LinkSiteCategoryId?: number;
  LinkApplicationId?: number;
  LinkApplicationSourceId?: number;
  LinkUserGroupId?: number;
  ActionType: EnumUserClaimGroupActionType;
  UserClaimGroupDetails: CoreUserClaimGroupDetailModel[];
}
