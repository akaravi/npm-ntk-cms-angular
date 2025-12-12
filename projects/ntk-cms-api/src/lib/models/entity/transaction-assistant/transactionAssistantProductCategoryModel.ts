import { BaseModuleEntity } from '../base/baseModuleEntity';

/**
 * transactionAssistantProductCategoryModel
 * دسته‌بندی محصول
 */
export class TransactionAssistantProductCategoryModel extends BaseModuleEntity<string> {
  /** عنوان دسته‌بندی */
  title: string;
  /** توضیحات دسته‌بندی */
  description?: string;
  /** شناسه دسته والد (اختیاری) */
  parentId?: string;
  /** شناسه تصویر اصلی دسته‌بندی */
  linkMainImageId?: number;
  /** آدرس URL تصویر اصلی دسته‌بندی */
  linkMainImageIdSrc?: string;
}
