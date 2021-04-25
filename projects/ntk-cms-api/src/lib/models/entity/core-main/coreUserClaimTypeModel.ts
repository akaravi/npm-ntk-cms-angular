import { EnumUserClaimKinds } from '../../enums/core/enumUserClaimKinds';
import { BaseEntity } from '../base/baseEntity';
import { CoreUserClaimGroupDetailModel } from './coreUserClaimGroupDetailModel';
import { CoreUserClaimContentModel } from './coreUserClaimContentModel';

export class CoreUserClaimTypeModel extends BaseEntity<number> {
  Title: string;
  Description: string;
  DismissOnEdit: boolean;
  LinkModuleId?: number;
  LinkApplicationId?: number;
  LinkSiteCategoryId?: number;
  Kind: EnumUserClaimKinds;
  UserClaims: CoreUserClaimContentModel[];
  UserClaimGroupDetails: CoreUserClaimGroupDetailModel[];

}
