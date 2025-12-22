import { BaseModuleEntity } from "../base/baseModuleEntity";

//@@tag-Version-2201011
/**
 * مخاطب CRM (Contact) شامل اطلاعات فردی و ارتباط با حساب/سلسله‌مراتب
 */
export class CrmContactModel extends BaseModuleEntity<string> {
  /** نام */
  firstName: string;
  /** نام خانوادگی */
  lastName: string;
  /** عنوان کامل */
  fullName: string;
  /** عنوان شغلی (Mr/Mrs/Dr/...) */
  salutation: string;
  /** سمت */
  jobTitle: string;
  /** نام شرکت */
  companyName: string;
  /** لینک به حساب */
  linkAccountId?: string;
  /** ایمیل */
  email: string;
  /** ایمیل دوم */
  emailSecondary: string;
  /** شماره تماس */
  phone: string;
  /** موبایل */
  mobile: string;
  /** شماره تماس دیگر */
  phoneOther: string;
  /** فکس */
  fax: string;
  /** تاریخ تولد */
  dateOfBirth?: Date;
  /** آدرس */
  address: string;
  /** شهر */
  city: string;
  /** استان */
  state: string;
  /** کد پستی */
  postalCode: string;
  /** کشور */
  country: string;
  /** توضیحات */
  description: string;
  /** یادداشت‌ها */
  notes: string;
  /** لینک به کاربر اختصاص داده‌شده */
  linkAssignedUserId?: number;
  /** لینک به مخاطب گزارش‌دهنده */
  linkReportsToContactId?: string;
  /** عکس اصلی */
  linkMainImageId?: number;
  /** آدرس عکس اصلی */
  linkMainImageIdSrc?: string;
  /** داده‌های اضافی JSON */
  otherDataJson: string;
}


