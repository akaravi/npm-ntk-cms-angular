import { BaseModuleEntity } from '../base/baseModuleEntity';

/**
 * transactionAssistantTagModel
 * برچسب محصول
 */
export class transactionAssistantTagModel extends BaseModuleEntity<string> {
  /** عنوان برچسب */
  title: string;
  /** شناسه برچسب والد (اختیاری) */
  parentId?: string;
  /** شناسه تصویر اصلی برچسب */
  linkMainImageId?: number;
  /** آدرس URL تصویر اصلی برچسب */
  linkMainImageIdSrc?: string;
}

