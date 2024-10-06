
import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2212191
export class EstateAccountAgencyExpertModel extends BaseModuleEntity<string> {
  linkEstateAccountAgencyId: string;
  linkEstateExpertId: string;
  accessShareAgencyToUser: boolean;
  accessShareUserToAgency: boolean;
}
