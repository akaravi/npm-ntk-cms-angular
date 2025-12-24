import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
/**
 * مدل تراکنش ارائه‌دهنده داده
 */
export class DataProviderTransactionModel extends BaseModuleEntity<number> {
  /** توضیحات */
  description: string;
  /** لینک به شناسه کلاینت */
  linkClientId: number;
  /** لینک به شناسه پلن */
  linkPlanId: number;
  /** لینک به شناسه قیمت پلن */
  linkPlanPriceId: number;

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
