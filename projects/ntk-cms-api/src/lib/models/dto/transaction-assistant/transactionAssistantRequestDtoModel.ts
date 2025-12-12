/**
 * transactionAssistantRequestDtoModel
 * DTO درخواست محصول
 */
export class TransactionAssistantRequestDtoModel {
  /** شناسه درخواست */
  id: string;
  /** شناسه محصول (اختیاری) */
  linkProductId?: string;
  /** شناسه دسته (اختیاری) */
  linkCategoryId?: string;
  /** شناسه تگ (اختیاری) */
  linkTagId?: string;
  /** مقدار درخواستی */
  desiredQty: number;
  /** استان مبدا مورد نظر (اختیاری) */
  originProvinceId?: number;
  /** وضعیت درخواست (رشته enum) */
  status: string;
}
