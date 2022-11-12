import { EnumGenderType } from '../../enums/base/enumGenderType';
import { BaseEntity } from '../base/baseEntity';

export class CoreUserModel extends BaseEntity<number> {
  username: string;
  pwd: string;
  expireDate: Date;
  email: string;
  emailConfirmed: boolean;
  mobile: string;
  mobileConfirmed: boolean;
  expireLockAccount: Date;
  name: string;
  lastName: string;
  birthDay: Date;
  gender: EnumGenderType;
  companyName: string;
  address: string;
  postalCode: string;
  linkMainImageId?: number;
  linkMainImageIdSrc: string;
  tell: string;
  isCompany: boolean;
  linkLocationId: number;
  firewallAllowIP: string;
  linkResellerSiteId?: number;
  linkResellerUserId?: number;
  linkLocationIdTitle: string;
  linkLocationIdParentTitle: string;
}
