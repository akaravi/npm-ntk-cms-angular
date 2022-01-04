import { EnumUserClaimKinds } from '../../enums/core/enumUserClaimKinds';
import { BaseEntity } from '../base/baseEntity';
import { CoreUserClaimGroupDetailModel } from './coreUserClaimGroupDetailModel';
import { CoreUserClaimContentModel } from './coreUserClaimContentModel';

export class CoreUserClaimTypeModel extends BaseEntity<number> {
  Title: string;
  TitleML: string;
  TitleResourceLanguage: string;
  Description: string;
  DismissOnEdit: boolean;
  Kind: EnumUserClaimKinds;
  UserClaims: CoreUserClaimContentModel[];
  UserClaimGroupDetails: CoreUserClaimGroupDetailModel[];
  LinkMainImageId: number;
  LinkMainImageIdSrc: string;
}
