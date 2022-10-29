import { EstateUserTypeEnum } from '../../enums/estate/estateUserTypeEnum';
import { BaseModuleEntity } from '../base/baseModuleEntity';

export class EstateAccountAgencyTypeUserModel extends BaseModuleEntity<string> {
  accountUserType: EstateUserTypeEnum;
  linkAccountUserId: string;
  linkAccountAgencyId: string;
  linkPropertyId: string;
}
