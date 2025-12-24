import { EstatePropertyExpertPriceTypeEnum } from '../../enums/estate/estatePropertyExpertPriceTypeEnum';
import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
/**
 * مدل قیمت کارشناسی ملک برای بازه‌های قیمتی فروش/اجاره/رهن.
 */
export class EstatePropertyExpertPriceModel extends BaseModuleEntity<string> {
  /** نوع قیمت کارشناسی (مین/مکس/متوسط و ...). */
  expertPriceType: EstatePropertyExpertPriceTypeEnum;
  /** توضیح. */
  description: string;
  /** شناسه موقعیت. */
  linkLocationId: number;
  /** شناسه کشور. */
  linkLocationCountryId: number;
  /** عنوان کشور. */
  linkLocationCountryIdTitle: string;
  /** عنوان موقعیت. */
  linkLocationIdTitle: string;
  /** عنوان والد موقعیت. */
  linkLocationIdParentTitle: string;

  /** شناسه نوع استفاده ملک. */
  linkPropertyTypeUsageId: string;
  /** شناسه کاربری زمین. */
  linkPropertyTypeLanduseId: string;
  /** شناسه نوع قرارداد. */
  linkContractTypeId: string;
  /** شناسه ارز. */
  linkCoreCurrencyId: number;
  /** سال ساخت (در صورت وجود). */
  createdYaer?: number;
  /** تعداد رکورد مبنا در محاسبه. */
  countRow: number;

  /** حداقل قیمت فروش. */
  salePriceMin: number;
  /** حداکثر قیمت فروش. */
  salePriceMax: number;
  /** میانگین قیمت فروش. */
  salePriceAverage: number;

  /** حداقل اجاره. */
  rentPriceMin: number;
  /** حداکثر اجاره. */
  rentPriceMax: number;
  /** میانگین اجاره. */
  rentPriceAverage: number;

  /** حداقل رهن. */
  depositPriceMin: number;
  /** حداکثر رهن. */
  depositPriceMax: number;
  /** میانگین رهن. */
  depositPriceAverage: number;

  /** حداقل قیمت دوره‌ای. */
  periodPriceMin: number;
  /** حداکثر قیمت دوره‌ای. */
  periodPriceMax: number;
  /** میانگین قیمت دوره‌ای. */
  periodPriceAverage: number;
}
