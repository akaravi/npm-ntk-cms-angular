import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
/**
 * مدل تراکنش ارائه‌دهنده داده
 */
export class DataProviderTransactionModel extends BaseModuleEntity<string> {
  /** توضیحات */
  description: string;
  /** لینک به شناسه کلاینت */
  linkClientId: string;
  /** لینک به شناسه پلن */
  linkPlanId: string;
  /** لینک به شناسه قیمت پلن */
  linkPlanPriceId: string;

  /** شناسه تراکنش سیستم */
  systemTransactionId: number;
  /** وضعیت موفقیت پرداخت سیستم */
  systemPaymentIsSuccess: number;

  /** مبلغ خالص فاکتور */
  amountPure: number;
  /** هزینه حمل و نقل */
  feeTransport: number;
  /** هزینه مالیات */
  feeTax: number;

  /** مبلغ کل پرداختی */
  amount: number;
}
