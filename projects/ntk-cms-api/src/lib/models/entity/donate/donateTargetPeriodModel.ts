import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DonateTargetModel } from './donateTargetModel';
import { DonateTargetPeriodSponsorModel } from './donateTargetPeriodSponsorModel';
import { DonateTransactionModel } from './donateTransactionModel';
//@@tag-Version-2201011
/**
 * مدل دوره هدف اهدا
 */
export class DonateTargetPeriodModel extends BaseModuleEntity<number> {
  /** عنوان */
  title: string;
  /** توضیحات */
  description: string;
  /** مبلغ مورد نیاز به حمایت */
  supportRequiredPayment: number;
  /** لینک به شناسه هدف */
  linkTargeId?: number;
  /** هدف */
  target: DonateTargetModel;
  virtual_Target: DonateTargetModel;
  /** از تاریخ */
  shareBeginDate?: Date;
  /** تا تاریخ */
  shareExpireDate?: Date;
  /** تعداد کلیک فعلی */
  currentClickCount: number;
  /** تعداد نمایش فعلی */
  currentViewCount: number;
  /** تعداد پرداخت فعلی */
  currentPaymentCount: number;
  /** مجموع پرداخت فعلی */
  currentPaymentSum: number;
  /** لیست حامیان دوره هدف */
  targetPeriodSponsors: DonateTargetPeriodSponsorModel[];
  /** لیست تراکنش‌ها */
  transactions: DonateTransactionModel[];
}
