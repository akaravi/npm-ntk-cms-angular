import { BaseModuleEntity } from '../base/baseModuleEntity';

/**
 * transactionAssistantSupplierModel
 * تامین‌کننده
 */
export class transactionAssistantSupplierModel extends BaseModuleEntity<string> {
  /** نام تامین‌کننده */
  name: string;
  /** نام شخص تماس (اختیاری) */
  contactName?: string;
  /** شماره تماس (اختیاری) */
  contactPhone?: string;
  /** استان مبدا (اختیاری) */
  originProvinceId?: number;
  /** وضعیت فعال بودن تامین‌کننده */
  active: boolean;
  /** شناسه تصویر اصلی تامین‌کننده */
  linkMainImageId?: number;
  /** آدرس URL تصویر اصلی تامین‌کننده */
  linkMainImageIdSrc?: string;
}

