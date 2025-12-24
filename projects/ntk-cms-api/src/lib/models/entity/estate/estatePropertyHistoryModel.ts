
import { ActivityStatusEnumEstate } from '../../enums/estate/estateActivityStatusEnum';
import { BaseModuleEntity } from '../base/baseModuleEntity';
import { EstateActivityTypeModel } from './estateActivityTypeModel';
//@@tag-Version-2201011
/**
 * تاریخچه فعالیت/پیگیری ملک.
 */
export class EstatePropertyHistoryModel extends BaseModuleEntity<string> {
  /** عنوان رویداد. */
  title: string;
  /** شناسه ملک. */
  linkPropertyId: string;
  /** شناسه سفارش مشتری مرتبط. */
  linkCustomerOrderId: string;
  /** شناسه کارشناس ملک. */
  linkEstateExpertId: string;
  /** شناسه آژانس. */
  linkEstateAgencyId: string;
  /** شناسه نوع فعالیت. */
  linkActivityTypeId: string;
  /** شناسه‌های فایل‌های پیوست. */
  linkFileIds: string;
  /** آدرس فایل‌های پیوست. */
  linkFileIdsSrc: string[];
  /** ناوبری نوع فعالیت. */
  activityType: EstateActivityTypeModel;
  /** وضعیت فعالیت. */
  activityStatus: ActivityStatusEnumEstate;
  /** زمان شروع قرار. */
  appointmentDateFrom: Date;
  /** زمان پایان/حدود قرار. */
  appointmentDateTo: Date;
  /** توضیح. */
  description: string;
  /** توضیح مخفی/داخلی. */
  descriptionHidden: string;
}
