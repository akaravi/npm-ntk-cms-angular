import { BaseModuleEntity } from '../base/baseModuleEntity';
import { transactionAssistantRequestStatusEnum } from '../../enums/transaction-assistant/transactionAssistantRequestStatusEnum';

/**
 * transactionAssistantProductRequestModel
 * درخواست محصول
 */
export class transactionAssistantProductRequestModel extends BaseModuleEntity<string> {
  /** شناسه کاربر هسته ثبت‌کننده (اختیاری) */
  linkCoreUserId?: number;
  /** شناسه محصول (اختیاری) */
  linkProductId?: string;
  /** شناسه دسته (اختیاری) */
  linkCategoryId?: string;
  /** شناسه تگ (اختیاری) */
  linkTagId?: string;
  /** مقدار درخواستی */
  desiredQty: number;
  /** استان مبدا مدنظر (اختیاری) */
  originProvinceId?: number;
  /** توضیحات درخواست */
  description?: string;
  /** فیلترهای اعمال‌شده (JSON) */
  filtersJson?: string;
  /** وضعیت درخواست */
  status: transactionAssistantRequestStatusEnum;
  /** شناسه تصویر اصلی درخواست */
  linkMainImageId?: number;
  /** آدرس URL تصویر اصلی درخواست */
  linkMainImageIdSrc?: string;
}

