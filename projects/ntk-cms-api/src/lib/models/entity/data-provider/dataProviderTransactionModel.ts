import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
export class DataProviderTransactionModel extends BaseModuleEntity<number> {
  description: string;
  linkClientId: number;
  linkPlanId: number;
  linkPlanPriceId: number;

  systemTransactionId: number;
  systemPaymentIsSuccess: number;


  /// <summary>
  /// مبلغ خالص فاکتور
  /// </summary>
  amountPure: number;
  /// <summary>
  /// هزینه حمل و نقل
  /// </summary>
  feeTransport: number;
  /// <summary>
  /// هزینه مالیات
  /// </summary>
  feeTax: number;

  /// <summary>
  /// مبلغ کل پرداختی
  /// </summary>
  amount: number;
}
