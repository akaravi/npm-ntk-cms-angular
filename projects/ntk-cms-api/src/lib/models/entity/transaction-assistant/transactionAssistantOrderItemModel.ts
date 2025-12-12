import { BaseModuleEntity } from '../base/baseModuleEntity';

/**
 * transactionAssistantOrderItemModel
 * آیتم‌های سفارش
 */
export class TransactionAssistantOrderItemModel extends BaseModuleEntity<string> {
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
