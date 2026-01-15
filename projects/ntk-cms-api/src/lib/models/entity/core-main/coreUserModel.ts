import { GenderTypeEnum } from '../../enums/base/genderTypeEnum';
import { BaseEntity } from '../base/baseEntity';
//@@tag-Version-2201011
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
  gender: GenderTypeEnum;
  companyName: string;
  address: string;
  postalCode: string;
  linkMainImageId?: number;
  linkMainImageIdSrc: string;
  tell: string;
  isCompany: boolean;
  linkLocationId: number;
  linkResellerSiteId?: number;
  linkResellerUserId?: number;
  linkLocationIdTitle: string;
  linkLocationIdParentTitle: string;
  /** آدرس IP های مجاز فایروال  */
  firewallAllowIP: string;
  /** لیست آدرس IP های مجاز فایروال */
  firewallAllowIPList: string[] = [];
}
