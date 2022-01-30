import { BaseModuleEntity } from '../base/baseModuleEntity';
export class CoreModuleSiteUserCreditModel extends BaseModuleEntity<number> {
  LinkUserId: number;
  LinkModuleId: number;
  Credit: number;
}
