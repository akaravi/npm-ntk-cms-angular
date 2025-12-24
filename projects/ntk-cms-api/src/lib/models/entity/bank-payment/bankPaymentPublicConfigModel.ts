import { BaseEntity } from '../base/baseEntity';
import { BankPaymentPrivateSiteConfigModel } from './bankPaymentPrivateSiteConfigModel';
//@@tag-Version-2201011
/**
 * مدل تنظیمات عمومی پرداخت بانکی
 */
export class BankPaymentPublicConfigModel extends BaseEntity<number> {
  /** عنوان */
  title: string;
  /** عنوان کلاس */
  className: string;
  /** لینک به شناسه فایل لوگو ماژول */
  linkModuleFileLogoId: number;
  /** آدرس فایل لوگو ماژول */
  linkModuleFileLogoIdSrc: string;
  /** واحد پول */
  linkCurrencyId: number;
  /** تنظیمات عمومی */
  publicConfigJsonValues: string;
  /** یادداشت */
  memo: string;
  /** لیست تنظیمات خصوصی سایت‌ها */
  privateSiteConfigs: BankPaymentPrivateSiteConfigModel[];
}
