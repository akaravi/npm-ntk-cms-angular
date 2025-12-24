import { BaseEntity } from '../base/baseEntity';
import { BankPaymentPublicConfigModel } from './bankPaymentPublicConfigModel';
import { BankPaymentTransactionModel } from './bankPaymentTransactionModel';
//@@tag-Version-2201011
/**
 * مدل تنظیمات خصوصی سایت پرداخت بانکی
 */
export class BankPaymentPrivateSiteConfigModel extends BaseEntity<number> {
  /** عنوان */
  title: string;
  /** نسبت واحد پول به فروشگاه */
  currencyUnitRatioByShop: number;

  /** حداکثر مبلغ تراکنش */
  maxTransactionAmount: number;
  /** حداقل مبلغ تراکنش */
  minTransactionAmount: number;

  /** مقدار ثابت تراکنش */
  fixFeeTransactionAmount: number;

  /** مقداردرصد تراکنش */
  percentFeeTransactionAmount: number;
  /** لینک به شناسه تنظیمات عمومی */
  linkPublicConfigId: number;
  // tslint:disable-next-line: variable-name
  virtual_PublicConfig: BankPaymentPublicConfigModel;
  /** تنظیمات عمومی */
  publicConfig: BankPaymentPublicConfigModel;

  /** تنظیمات خصوصی */
  privateConfigJsonValues: string;
  /** یادداشت */
  memo: string;
  /** لیست تراکنش‌ها */
  transactions: BankPaymentTransactionModel[];
  /** آدرس فایل لوگو ماژول */
  linkModuleFileLogoIdSrc: string;
}
