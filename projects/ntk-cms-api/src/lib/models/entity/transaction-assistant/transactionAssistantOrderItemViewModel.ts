import { BaseModuleEntity } from '../base/baseModuleEntity';

/**
 * transactionAssistantOrderItemViewModel
 * آیتم‌های سفارش
 */
export class transactionAssistantOrderItemViewModel extends BaseModuleEntity<string> {
  /** شناسه سفارش مرتبط */
  linkOrderId: string;
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
}


