
import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2212191
export class EstateAccountAgencyUserModel extends BaseModuleEntity<string> {
  linkEstateAccountAgencyId: string;
  linkEstateAccountUserId: string;
  accessShareAgencyToUser:boolean;
  accessShareUserToAgency:boolean;
}
