import { EnumUserClaimGroupActionType } from '../../enums/core/enumUserClaimGroupActionType';
import { EnumGenderType } from '../../enums/enumGenderType';
import { BaseEntity } from '../base/baseEntity';
import { CoreUserClaimGroupDetailModel } from './coreUserClaimGroupDetailModel';

export class CoreUserClaimGroupModel extends BaseEntity<number> {
  Title: string;
  Description: string;
  LinkApplicationId?: number;
  LinkSiteCategoryId?: number;
  LinkModuleId: number;
  ActionType: EnumUserClaimGroupActionType;
  UserClaimGroupDetails: CoreUserClaimGroupDetailModel[];
}
