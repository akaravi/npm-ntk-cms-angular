import { BaseModuleEntity } from '../base/baseModuleEntity';

/**
 * transactionAssistantProductCategoryViewModel
 * دسته‌بندی محصول
 */
export class transactionAssistantProductCategoryViewModel extends BaseModuleEntity<string> {
  /** عنوان دسته‌بندی */
  title: string;
  /** توضیحات دسته‌بندی */
  description?: string;
  /** شناسه دسته والد (اختیاری) */
  parentId?: string;
}


