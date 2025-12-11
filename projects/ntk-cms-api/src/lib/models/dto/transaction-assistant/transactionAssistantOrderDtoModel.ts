/**
 * transactionAssistantOrderDtoModel
 * DTO سفارش با فیلد LinkCartId
 */
export class transactionAssistantOrderDtoModel {
  /** شناسه سفارش */
  id: string;
  /** شناسه سبد خرید مرتبط */
  linkCartId: string;
  /** وضعیت سفارش (رشته enum) */
  status: string;
  /** وضعیت پرداخت (رشته enum) */
  paymentStatus: string;
  /** نوع سفارش (رشته enum) */
  orderType: string;
  /** نوع تحویل صادراتی (رشته enum، اختیاری) */
  exportDeliveryType: string;
  /** کشور مقصد (اختیاری) */
  destinationCountry: string;
  /** شهر مقصد (اختیاری) */
  destinationCity: string;
}


