import { BaseModuleEntity } from '../base/baseModuleEntity';

export class DataProviderTransactionModel extends BaseModuleEntity<number> {
  Description: string;
  LinkClientId: number;
  LinkPlanId: number;
  LinkPlanPriceId: number;

  SystemTransactionId: number;
  SystemPaymentIsSuccess: number;


  /// <summary>
  /// مبلغ خالص فاکتور
  /// </summary>
  AmountPure: number;
  /// <summary>
  /// هزینه حمل و نقل
  /// </summary>
  FeeTransport: number;
  /// <summary>
  /// هزینه مالیات
  /// </summary>
  FeeTax: number;

  /// <summary>
  /// مبلغ کل پرداختی
  /// </summary>
  Amount: number;
}
