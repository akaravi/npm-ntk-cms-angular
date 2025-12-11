import { BaseModuleEntity } from '../base/baseModuleEntity';

/**
 * transactionAssistantTagViewModel
 * برچسب محصول
 */
export class transactionAssistantTagViewModel extends BaseModuleEntity<string> {
  /** عنوان برچسب */
  title: string;
  /** شناسه برچسب والد (اختیاری) */
  parentId?: string;
}


