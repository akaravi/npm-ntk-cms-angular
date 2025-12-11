/**
 * transactionAssistantShipmentDtoModel
 * DTO ارسال و گمرک
 */
export class transactionAssistantShipmentDtoModel {
  /** شناسه ارسال */
  id: string;
  /** شناسه سفارش مرتبط */
  linkOrderId: string;
  /** وضعیت ارسال (رشته enum) */
  status: string;
  /** کد رهگیری */
  trackingCode: string;
  /** وضعیت گمرکی (رشته enum، اختیاری) */
  customsStatus: string;
  /** شماره اظهارنامه گمرکی */
  customsDeclarationNumber?: string;
  /** تاریخ ترخیص */
  customsClearedAt?: Date;
  /** نام گمرک مبدا */
  originCustomsName?: string;
  /** نام گمرک مقصد */
  destinationCustomsName?: string;
  /** مبلغ عوارض گمرکی */
  customsDutyAmount?: number;
}


