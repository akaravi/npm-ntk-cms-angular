import { BaseModuleEntity } from '../base/baseModuleEntity';

/**
 * transactionAssistantProductModel
 * محصول با جزئیات پایه
 */
export class TransactionAssistantProductModel extends BaseModuleEntity<string> {
  /** کد محصول (SKU) */
  code: string;
  /** نام محصول */
  name: string;
  /** توضیحات محصول (اختیاری) */
  description?: string;
  /** واحد اندازه‌گیری */
  unit: string;
  /** وضعیت فعال بودن محصول */
  active: boolean;
  /** شناسه تصویر اصلی محصول */
  linkMainImageId?: number;
  /** آدرس URL تصویر اصلی محصول */
  linkMainImageIdSrc?: string;
}
