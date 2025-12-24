//@@tag-Version-2212111
/**
 * مقدار فیلد جزئیات ملک (Value) همراه با ارجاع به تاریخچه.
 */
export class EstatePropertyDetailValueModel {
  /** شناسه مقدار. */
  id: string;
  /** شناسه فیلد جزئیات مرتبط. */
  linkPropertyDetailId: string;
  //propertyDetail: EstatePropertyDetailModel;
  /** مقدار ذخیره‌شده. */
  value: string;
  /** شناسه تاریخچه مرتبط. */
  linkHistoryId: string;
}
