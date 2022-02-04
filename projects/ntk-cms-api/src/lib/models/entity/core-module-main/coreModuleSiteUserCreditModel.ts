import { BaseModuleEntity } from '../base/baseModuleEntity';
export class CoreModuleSiteUserCreditModel extends BaseModuleEntity<number> {
  LinkUserId: number;
  LinkModuleId: number;
  Credit: number;
  SumCreditBlocked: number;
  SumCost: number;
  SumDebtor: number;
  SumCreditor: number;
  SumRemaining: number;
  Description: string;
}
