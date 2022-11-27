import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DonateSponsorModel } from './donateSponsorModel';
import { DonateTargetPeriodModel } from './donateTargetPeriodModel';
//@@tag-Version-2201011
export class DonateTransactionModel extends BaseModuleEntity<number> {
  linkCmsUserId?: number;
  linkSponsorId?: number;
  sponsor: DonateSponsorModel;
  virtual_Sponsor: DonateSponsorModel;
  linkTargetPeriodId: number;
  targetPeriod: DonateTargetPeriodModel;
  virtual_TargetPeriod: DonateTargetPeriodModel;

  systemTransactionId: number;
  systemPaymentIsSuccess: number;

  name: string;
  family: string;
  mobile: string;


  /// <summary>
  /// موقعیت عرض جغرافیایی
  /// </summary>
  geoLocationLatitude?: number;
  /// <summary>
  /// موقعیت طول جغرافیایی
  /// </summary>
  geoLocationLongitude?: number;
  address: string;

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
