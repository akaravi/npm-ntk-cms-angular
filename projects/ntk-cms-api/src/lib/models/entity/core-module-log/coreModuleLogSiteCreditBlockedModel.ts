import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
export class CoreModuleLogSiteCreditBlockedModel extends BaseModuleEntity<string> {
  linkModuleId: number;
  linkModuleBankPaymentTransactionId: number;
  transactionCredit: number;
  startTransactionCredit: number;
  endTransactionCredit: number;
  endTransactionDate: Date;
}

