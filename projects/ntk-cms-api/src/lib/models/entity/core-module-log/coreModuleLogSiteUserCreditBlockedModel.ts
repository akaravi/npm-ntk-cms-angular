import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
export class CoreModuleLogSiteUserCreditBlockedModel extends BaseModuleEntity<string> {
  linkModuleId: number;
  linkUserId: number;
  transactionId: number;
  transactionCredit: number;
  startTransactionCredit: number;
  endTransactionCredit: number;
  endTransactionDate: Date;
}

