/**
 * transactionAssistantInventoryDtoModel
 * DTO موجودی محصول/تامین‌کننده با فیلدهای Link*
 */
export class transactionAssistantInventoryDtoModel {
  /** شناسه رکورد موجودی */
  id: string;
  /** شناسه محصول */
  linkProductId: string;
  /** شناسه تامین‌کننده */
  linkSupplierId: string;
  /** استان مبدا (اختیاری) */
  originProvinceId?: number;
  /** قیمت واحد */
  price: number;
  /** موجودی فعلی */
  stockQty: number;
}


