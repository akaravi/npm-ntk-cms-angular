/**
 * transactionAssistantTagDtoModel
 * DTO برچسب محصول
 */
export class transactionAssistantTagDtoModel {
  /** شناسه برچسب */
  id: string;
  /** عنوان برچسب */
  title: string;
  /** شناسه برچسب والد (اختیاری) */
  parentId?: string;
}


