import { BaseModuleEntity } from '../base/baseModuleEntity';

/**
 * transactionAssistantCartItemModel
 * آیتم‌های سبد خرید
 */
export class TransactionAssistantCartItemModel extends BaseModuleEntity<string> {
  /** شناسه سبد مرتبط */
  linkCartId: string;
  /** شناسه محصول */
  linkProductId: string;
  /** شناسه تامین‌کننده (اختیاری) */
  linkSupplierId?: string;
  /** استان مبدا (اختیاری) */
  originProvinceId?: number;
  /** مقدار */
  qty: number;
  /** قیمت واحد */
  unitPrice: number;
  /** فیلترهای اعمال‌شده (JSON) */
  appliedFiltersJson?: string;
}
