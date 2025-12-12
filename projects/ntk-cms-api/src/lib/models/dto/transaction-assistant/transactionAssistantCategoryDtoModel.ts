/**
 * transactionAssistantCategoryDtoModel
 * DTO دسته‌بندی محصول
 */
export class TransactionAssistantCategoryDtoModel {
  /** شناسه دسته */
  id: string;
  /** عنوان دسته */
  title: string;
  /** شناسه دسته والد (اختیاری) */
  parentId?: string;
}
