import { EnumGenderType } from '../../enums/enumGenderType';
import { BaseModuleEntity } from '../base/baseModuleEntity';

export class MemberUserModel extends BaseModuleEntity<number> {
  linkCmsUserId?: number;
  deviceId: string;
  joinId: string;
  gender: EnumGenderType;
  firstName: string;
  lastName: string;
  linkLocationId?: number;
  dateBirth?: string;
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
}
