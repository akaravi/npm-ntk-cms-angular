import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
export class CoreModuleLogSiteCreditBlockedModel extends BaseModuleEntity<string> {
  linkModuleId:number;
  transactionId: number;
  transactionCredit: number;
  stratTransactionCredit: number;
  endTransactionCredit: number;
  endTransactionDate: Date;
}

