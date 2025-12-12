/**
 * transactionAssistantPaymentDtoModel
 * DTO پرداخت با فیلد LinkOrderId
 */
export class TransactionAssistantPaymentDtoModel {
  /** شناسه پرداخت */
  id: string;
  /** شناسه سفارش مرتبط */
  linkOrderId: string;
  /** روش پرداخت (رشته enum) */
  method: string;
  /** وضعیت پرداخت (رشته enum) */
  status: string;
  /** مبلغ پرداخت */
  amount: number;
  /** شماره مرجع درگاه (اختیاری) */
  gatewayReference?: string;
}
