/**
 * transactionAssistantSupplierDtoModel
 * DTO تامین‌کننده
 */
export class transactionAssistantSupplierDtoModel {
  /** شناسه تامین‌کننده */
  id: string;
  /** نام تامین‌کننده */
  name: string;
  /** استان مبدا (اختیاری) */
  originProvinceId?: number;
  /** وضعیت فعال بودن تامین‌کننده */
  active: boolean;
}


