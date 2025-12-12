/**
 * نوع تحویل صادراتی (Incoterms ساده‌شده)
 */
export enum TransactionAssistantExportDeliveryTypeEnum {
  /** تحویل در گمرک مبدا (EXW مشابه) */
  CustomsOrigin = 0,
  /** تحویل در گمرک مقصد (DAP مشابه) */
  CustomsDestination = 1,
  /** تحویل در محل با پرداخت عوارض (DDP) */
  DeliveredDutyPaid = 2,
  /** تحویل در محل بدون پرداخت عوارض (DDU) */
  DeliveredDutyUnpaid = 3,
  /** FOB: تحویل روی عرشه در بندر مبدا */
  FreeOnBoard = 4,
  /** CIF: هزینه+بیمه+کرایه تا بندر مقصد */
  CostInsuranceFreight = 5,
}
