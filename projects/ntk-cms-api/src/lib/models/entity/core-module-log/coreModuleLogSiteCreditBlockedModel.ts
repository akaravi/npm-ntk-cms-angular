import { BaseModuleEntity } from '../base/baseModuleEntity';

export class CoreModuleLogSiteCreditBlockedModel extends BaseModuleEntity<string> {
  LinkModuleId:number;
  TransactionId: number;
  TransactionCredit: number;
  StratTransactionCredit: number;
  EndTransactionCredit: number;
  EndTransactionDate: Date;
}

