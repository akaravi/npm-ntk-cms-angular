import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
export class CoreModuleSiteUserCreditModel extends BaseModuleEntity<number> {
  linkUserId: number;
  linkModuleId: number;
  credit: number;
  sumCreditBlocked: number;
  sumCost: number;
  sumDebtor: number;
  sumCreditor: number;
  sumRemaining: number;
  description: string;
}
