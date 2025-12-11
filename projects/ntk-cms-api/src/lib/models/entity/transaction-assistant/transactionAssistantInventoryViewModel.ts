import { BaseModuleEntity } from '../base/baseModuleEntity';

/**
 * transactionAssistantInventoryViewModel
 * موجودی محصول/تامین‌کننده
 */
export class transactionAssistantInventoryViewModel extends BaseModuleEntity<string> {
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
}


