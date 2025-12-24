import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DonateSponsorModel } from './donateSponsorModel';
import { DonateTargetPeriodModel } from './donateTargetPeriodModel';
//@@tag-Version-2201011
/**
 * مدل تراکنش اهدا
 */
export class DonateTransactionModel extends BaseModuleEntity<number> {
  /** لینک به شناسه کاربر CMS */
  linkCmsUserId?: number;
  /** لینک به شناسه حامی */
  linkSponsorId?: number;
  /** حامی */
  sponsor: DonateSponsorModel;
  virtual_Sponsor: DonateSponsorModel;
  /** لینک به شناسه دوره هدف */
  linkTargetPeriodId: number;
  /** دوره هدف */
  targetPeriod: DonateTargetPeriodModel;
  virtual_TargetPeriod: DonateTargetPeriodModel;

  /** شناسه تراکنش سیستم */
  systemTransactionId: number;
  /** وضعیت موفقیت پرداخت سیستم */
  systemPaymentIsSuccess: number;

  /** نام */
  name: string;
  /** نام خانوادگی */
  family: string;
  /** موبایل */
  mobile: string;

  /** موقعیت عرض جغرافیایی */
  geoLocationLatitude?: number;
  /** موقعیت طول جغرافیایی */
  geoLocationLongitude?: number;
  /** آدرس */
  address: string;

  /** مبلغ خالص فاکتور */
  amountPure: number;
  /** هزینه حمل و نقل */
  feeTransport: number;
  /** هزینه مالیات */
  feeTax: number;

  /** مبلغ کل پرداختی */
  amount: number;
}
