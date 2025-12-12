/**
 * transactionAssistantTagDtoModel
 * DTO برچسب محصول
 */
export class TransactionAssistantTagDtoModel {
  /** شناسه برچسب */
  id: string;
  /** عنوان برچسب */
  title: string;
  /** شناسه برچسب والد (اختیاری) */
  parentId?: string;
}
