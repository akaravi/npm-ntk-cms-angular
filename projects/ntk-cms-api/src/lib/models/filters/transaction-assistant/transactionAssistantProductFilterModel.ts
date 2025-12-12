import { FilterModel } from '../../entity/base/filterModel';

/**
 * فیلتر محصول (ساده)
 */
export class TransactionAssistantProductFilterModel extends FilterModel {
  /** شناسه دسته (اختیاری) */
  linkCategoryId?: string;
  /** شناسه تگ (اختیاری) */
  linkTagId?: string;
  /** شناسه استان مبدا (اختیاری) */
  originProvinceId?: number;
  /** متن جستجو */
  searchText?: string;
}
