import { BaseModuleEntity } from '../base/baseModuleEntity';

export class CoreModuleLogSiteUserCreditBlockedModel extends BaseModuleEntity<string> {
  LinkModuleId:number;
  LinkUserId:number;
  TransactionId: number;
  TransactionCredit: number;
  StratTransactionCredit: number;
  EndTransactionCredit: number;
  EndTransactionDate: Date;
}

