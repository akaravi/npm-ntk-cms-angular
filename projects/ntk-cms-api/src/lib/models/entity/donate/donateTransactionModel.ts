import { BaseModuleEntity } from '../base/baseModuleEntity';
import { DonateSponsorModel } from './donateSponsorModel';
import { DonateTargetCategoryModel } from './donateTargetCategoryModel';
import { DonateTargetPeriodModel } from './donateTargetPeriodModel';

export class DonateTransactionModel extends BaseModuleEntity<number> {
  LinkCmsUserId?: number;
  LinkSponsorId?: number;
  Sponsor: DonateSponsorModel;
  LinkTargetPeriodId: number;
  TargetPeriod: DonateTargetPeriodModel;

  SystemTransactionId: number;
  SystemPaymentIsSuccess: number;

  Name: string;
  Family: string;
  Mobile: string;


  /// <summary>
  /// موقعیت عرض جغرافیایی
  /// </summary>
  GeoLocationLatitude?: number;
  /// <summary>
  /// موقعیت طول جغرافیایی
  /// </summary>
  GeoLocationLongitude?: number;
  Address: string;

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
