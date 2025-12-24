import { BaseModuleEntity } from '../base/baseModuleEntity';
//@@tag-Version-2201011
/**
 * مدل جزئیات لاگ صندوق خروجی انبوه پیامک
 */
export class SmsLogOutBoxDetailBulkModel extends BaseModuleEntity<string> {
  /** تاریخ قفل */
  lockDate: Date;
  /** نوع پردازش */
  processType?: any;
  /** شناسه پردازش */
  processid: number;
  /** شناسه دوم پردازش */
  processIdSecond?: any;
  /** جزئیات انبوه صندوق خروجی (مجازی) */
  // tslint:disable-next-line: variable-name
  virtual_OutBoxDetailBulk?: any;
  /** جزئیات انبوه صندوق خروجی */
  outBoxDetailBulk?: any;
}
