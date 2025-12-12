import { BaseModuleEntity } from '../base/baseModuleEntity';

/**
 * transactionAssistantInventoryModel
 * موجودی محصول/تامین‌کننده
 */
export class TransactionAssistantInventoryModel extends BaseModuleEntity<string> {
  /** شناسه محصول */
  linkProductId: string;
  /** شناسه تامین‌کننده */
  linkSupplierId: string;
  /** استان مبدا (اختیاری) */
  originProvinceId?: number;
  /** قیمت واحد */
  price: number;
  /** موجودی فعلی */
  stockQty: number;
  /** حداقل مقدار سفارش (اختیاری) */
  minOrderQty?: number;
  /** ویژگی‌های محصول/موجودی به صورت JSON (اختیاری) */
  attributesJson?: string;
  /** وضعیت فعال بودن موجودی */
  active: boolean;
  /** شناسه تصویر اصلی موجودی */
  linkMainImageId?: number;
  /** آدرس URL تصویر اصلی موجودی */
  linkMainImageIdSrc?: string;
}
