/**
 * transactionAssistantOfferDtoModel
 * DTO پیشنهاد تامین‌کننده
 */
export class transactionAssistantOfferDtoModel {
  /** شناسه پیشنهاد */
  id: string;
  /** شناسه درخواست محصول مرتبط */
  linkProductRequestId: string;
  /** شناسه تامین‌کننده */
  linkSupplierId: string;
  /** مقدار پیشنهادی */
  offeredQty: number;
  /** قیمت پیشنهادی */
  offeredPrice: number;
  /** وضعیت پیشنهاد (رشته enum) */
  status: string;
}


