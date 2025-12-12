import { FilterModel } from '../../entity/base/filterModel';

/**
 * فیلتر درخواست محصول
 */
export class TransactionAssistantRequestFilterModel extends FilterModel {
  /** شناسه محصول (اختیاری) */
  linkProductId?: string;
  /** شناسه دسته (اختیاری) */
  linkCategoryId?: string;
  /** شناسه تگ (اختیاری) */
  linkTagId?: string;
  /** استان مبدا (اختیاری) */
  originProvinceId?: number;
  /** وضعیت درخواست (رشته enum) */
  status?: string;
}
