import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
/**
 * آگهی ملک شامل سطح نمایش، بازه زمانی و مبالغ پرداختی.
 */
export class EstatePropertyAdsModel extends BaseModuleEntity<string> {
  /** عنوان آگهی. */
  title: string;
  /** توضیح آگهی. */
  description: string;
  /** سطح/ایستگاه نمایش. */
  stationLevel: number;
  /** درجه نمایش. */
  viewLevel: number;
  /** شناسه ملک. */
  linkPropertyId: string;
  /** تاریخ شروع نمایش. */
  fromDate: Date;
  /** تاریخ انقضا. */
  expireDate: Date;
  /** شناسه نوع آگهی. */
  linkAdsTypeId: string;
  /** شناسه تراکنش سیستم. */
  systemTransactionId: number;
  /** وضعیت موفقیت پرداخت (0/1). */
  systemPaymentIsSuccess: number;
  /** مبلغ خالص. */
  amountPure: number;
  /** کارمزد حمل/خدمات. */
  feeTransport: number;
  /** مالیات. */
  feeTax: number;
  /** مبلغ کل. */
  amount: number;
}
