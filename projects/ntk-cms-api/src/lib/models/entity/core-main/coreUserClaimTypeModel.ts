import { EnumUserClaimKinds } from '../../enums/core/enumUserClaimKinds';
import { EnumGenderType } from '../../enums/enumGenderType';
import { BaseEntity } from '../base/baseEntity';
import { CoreUserClaimGroupDetailModel } from './coreUserClaimGroupDetailModel';
import { CoreUserClaimModel } from './coreUserClaimModel';

export class CoreUserClaimTypeModel extends BaseEntity<number> {
  Title: string;
  Description: string;
  DismissOnEdit: boolean;
  LinkModuleId?: number;
  LinkApplicationId?: number;
  LinkSiteCategoryId?: number;
  Kind: EnumUserClaimKinds;
  UserClaims: CoreUserClaimModel[];
  UserClaimGroupDetails: CoreUserClaimGroupDetailModel[];

}
