import { BaseModuleEntity } from '../base/baseModuleEntity';
export class CoreModuleSiteCreditModel extends BaseModuleEntity<number> {
  LinkModuleId: number;
  Credit: number;
  SumCreditBlocked: number;
  SumCost: number;
  SumDebtor: number;
  SumCreditor: number;
  SumRemaining: number;
  Description: string;
}
