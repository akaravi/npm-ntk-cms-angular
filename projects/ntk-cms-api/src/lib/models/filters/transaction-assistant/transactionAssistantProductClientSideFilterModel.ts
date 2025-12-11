import { FilterModel } from "../../entity/base/filterModel";

/**
 * فیلتر سمت کلاینت محصول
 */
export class transactionAssistantProductClientSideFilterModel extends FilterModel {
  /** شناسه دسته (اختیاری) */
  linkCategoryId?: string;
  /** شناسه تگ (اختیاری) */
  linkTagId?: string;
  /** شناسه استان مبدا (اختیاری) */
  originProvinceId?: number;
  /** جستجوی متنی نام/کد/توضیح */
  searchText?: string;
}


