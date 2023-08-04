import { EnumGenderType } from '../../enums/base/genderTypeEnum';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { MemberPropertyModel } from './memberPropertyModel';
import { MemberUserGroupModel } from './memberUserGroupModel';
import { MemberUserSiteModel } from './memberUserSiteModel';
//@@tag-Version-2201011
export class MemberUserModel extends BaseModuleEntity<number> {
  linkCmsUserId?: number;
  deviceId: string;
  joinId: string;
  gender: EnumGenderType;
  firstName: string;
  lastName: string;
  linkLocationId?: number;
  dateBirth?: Date;
  birthPlace: string;
  nationalCode: string;
  email: string;
  mobileNo: string;
  phoneNo: string;
  officeNo: string;
  address: string;
  linkMainImageId?: number;
  linkFileIds: string;
  geolocationlatitude?: number;
  geolocationlongitude?: number;
  instagramId: string;
  telegramId: string;
  otherInfo1: string;
  otherInfo2: string;
  otherInfo3: string;
  otherInfo4: string;
  otherInfo5: string;
  otherInfo6: string;
  otherInfo7: string;
  otherInfo8: string;
  otherInfo9: string;
  otherInfo10: string;
  linkLocationIdTitle: string;
  linkLocationIdParentTitle: string;

  memberUserGroup: MemberUserGroupModel[];
  memberPropertes: MemberPropertyModel[];
  memberUserSites: MemberUserSiteModel[];

}
