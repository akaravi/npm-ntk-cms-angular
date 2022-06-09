import { EnumEstateUserType } from '../../enums/estate/enumEstateUserType';
import { BaseModuleEntity } from '../base/baseModuleEntity';

export class EstateAccountAgencyTypeUserModel extends BaseModuleEntity<string> {
  accountUserType: EnumEstateUserType;
  linkAccountUserId: string;
  linkAccountAgencyId: string;
  linkPropertyId: string;
}
