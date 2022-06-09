import { BaseModuleEntity } from '../base/baseModuleEntity';

export class CoreModuleLogSiteUserCreditBlockedModel extends BaseModuleEntity<string> {
  linkModuleId:number;
  linkUserId:number;
  transactionId: number;
  transactionCredit: number;
  stratTransactionCredit: number;
  endTransactionCredit: number;
  endTransactionDate: Date;
}

