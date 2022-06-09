import { BaseModuleEntity } from '../base/baseModuleEntity';

export class CoreModuleLogSiteCreditBlockedModel extends BaseModuleEntity<string> {
  linkModuleId:number;
  transactionId: number;
  transactionCredit: number;
  stratTransactionCredit: number;
  endTransactionCredit: number;
  endTransactionDate: Date;
}

