import { EnumEstateUserType } from '../../enums/estate/enumEstateUserType';
import { BaseModuleEntity } from '../base/baseModuleEntity';

export class EstateAccountAgencyTypeUserModel extends BaseModuleEntity<string> {
  AccountUserType: EnumEstateUserType;
  LinkAccountUserId: string;
  LinkAccountAgencyId: string;
  LinkPropertyId: string;
}
