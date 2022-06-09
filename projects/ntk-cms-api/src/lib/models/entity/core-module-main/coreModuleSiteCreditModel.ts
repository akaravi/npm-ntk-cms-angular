import { BaseModuleEntity } from '../base/baseModuleEntity';
export class CoreModuleSiteCreditModel extends BaseModuleEntity<number> {
  linkModuleId: number;
  credit: number;
  sumCreditBlocked: number;
  sumCost: number;
  sumDebtor: number;
  sumCreditor: number;
  sumRemaining: number;
  description: string;
}
