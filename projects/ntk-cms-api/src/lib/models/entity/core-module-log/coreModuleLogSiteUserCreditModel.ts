import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
export class CoreModuleLogSiteUserCreditModel extends BaseModuleEntity<string> {
  linkModuleId: number;
  linkUserId: number;
  transactionId: number;
  transactionCredit: number;
  startTransactionCredit: number;
  endTransactionCredit: number;
  endTransactionDate: Date;
  description: string;
}

