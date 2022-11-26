import { EstateUserTypeEnum } from '../../enums/estate/estateUserTypeEnum';
import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
export class EstateAccountAgencyTypeUserModel extends BaseModuleEntity<string> {
  accountUserType: EstateUserTypeEnum;
  linkAccountUserId: string;
  linkAccountAgencyId: string;
  linkPropertyId: string;
}
