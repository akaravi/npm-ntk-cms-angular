import { FilterModel } from "../../entity/base/filterModel";

/**
 * فیلتر سمت سرور آدرس
 */
export class transactionAssistantAddressServerSideFilterModel extends FilterModel {
  /** شناسه کاربر هسته (اختیاری) */
  linkCoreUserId?: number;
  /** شناسه استان (اختیاری) */
  provinceId?: number;
  /** نام شهر (اختیاری) */
  city?: string;
  /** جستجوی متنی در آدرس/شهر/تماس */
  searchText?: string;
}


