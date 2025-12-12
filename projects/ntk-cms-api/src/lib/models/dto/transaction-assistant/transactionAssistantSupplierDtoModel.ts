/**
 * transactionAssistantSupplierDtoModel
 * DTO تامین‌کننده
 */
export class TransactionAssistantSupplierDtoModel {
  /** شناسه تامین‌کننده */
  id: string;
  /** نام تامین‌کننده */
  name: string;
  /** استان مبدا (اختیاری) */
  originProvinceId?: number;
  /** وضعیت فعال بودن تامین‌کننده */
  active: boolean;
}
