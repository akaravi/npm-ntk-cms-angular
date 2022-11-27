import { EnumUserClaimKinds } from '../../enums/core/enumUserClaimKinds';
import { BaseEntity } from '../base/baseEntity';
import { CoreUserClaimGroupDetailModel } from './coreUserClaimGroupDetailModel';
import { CoreUserClaimContentModel } from './coreUserClaimContentModel';
//@@tag-Version-2201011
export class CoreUserClaimTypeModel extends BaseEntity<number> {
  title: string;
  titleML: string;
  titleResourceLanguage: string;
  description: string;
  dismissOnEdit: boolean;
  kind: EnumUserClaimKinds;
  userClaims: CoreUserClaimContentModel[];
  userClaimGroupDetails: CoreUserClaimGroupDetailModel[];
  linkMainImageId: number;
  linkMainImageIdSrc: string;
}
