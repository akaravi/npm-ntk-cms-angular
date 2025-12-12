import { FilterModel } from '../../entity/base/filterModel';

/**
 * فیلتر سمت کلاینت آدرس
 */
export class TransactionAssistantAddressClientSideFilterModel extends FilterModel {
  /** شناسه کاربر هسته (اختیاری) */
  linkCoreUserId?: number;
  /** شناسه استان (اختیاری) */
  provinceId?: number;
  /** نام شهر (اختیاری) */
  city?: string;
}
