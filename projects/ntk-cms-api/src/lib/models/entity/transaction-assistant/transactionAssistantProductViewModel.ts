import { BaseModuleEntity } from '../base/baseModuleEntity';

/**
 * transactionAssistantProductViewModel
 * محصول با جزئیات پایه
 */
export class transactionAssistantProductViewModel extends BaseModuleEntity<string> {
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
}


