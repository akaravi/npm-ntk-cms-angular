import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DataProviderClientModel } from './dataProviderClientModel';
import { DataProviderPlanModel } from './dataProviderPlanModel';
import { DataProviderPlanPriceModel } from './dataProviderPlanPriceModel';
//@@tag-Version-2201011
/**
 * مدل تراکنش ارائه‌دهنده داده
 */
export class DataProviderTransactionModel extends BaseModuleEntity<string> {
  /** توضیحات */
  description: string;
  /** لینک به شناسه کلاینت */
  linkClientId: string;
  /** کلاینت */
  client: DataProviderClientModel;
  virtual_Client: DataProviderClientModel;
  /** لینک به شناسه پلن */
  linkPlanId: string;
  /** پلن */
  plan: DataProviderPlanModel;
  virtual_Plan: DataProviderPlanModel;
  /** لینک به شناسه قیمت پلن */
  linkPlanPriceId: string;
  /** قیمت پلن */
  planPrice: DataProviderPlanPriceModel;
  virtual_PlanPrice: DataProviderPlanPriceModel;

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
