/**
 * transactionAssistantInvoiceDtoModel
 * DTO فاکتور رسمی با فیلد LinkOrderId
 */
export class TransactionAssistantInvoiceDtoModel {
  /** شناسه فاکتور */
  id: string;
  /** شناسه سفارش مرتبط */
  linkOrderId: string;
  /** نوع شخص (رشته enum: NaturalPerson/LegalEntity) */
  personType: string;
  /** مبلغ کل فاکتور */
  totalAmount: number;
}
