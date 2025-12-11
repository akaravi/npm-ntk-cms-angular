import { BaseModuleEntity } from '../base/baseModuleEntity';
import { transactionAssistantRequestStatusEnum } from '../../enums/transaction-assistant/transactionAssistantRequestStatusEnum';

/**
 * transactionAssistantProductRequestViewModel
 * درخواست محصول
 */
export class transactionAssistantProductRequestViewModel extends BaseModuleEntity<string> {
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
}


