import { BaseModuleEntity } from '../base/baseModuleEntity';

/**
 * transactionAssistantSupplierViewModel
 * تامین‌کننده
 */
export class transactionAssistantSupplierViewModel extends BaseModuleEntity<string> {
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
}


