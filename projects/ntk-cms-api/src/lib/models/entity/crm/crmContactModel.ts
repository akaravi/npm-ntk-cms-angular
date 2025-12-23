import { BaseModuleEntity } from "../base/baseModuleEntity";

//@@tag-Version-2201011
/**
 * مخاطب CRM (Contact) شامل اطلاعات فردی و ارتباط با حساب/سلسله‌مراتب
 */
export class CrmContactModel extends BaseModuleEntity<string> {
  /** شماره مخاطب (Contact Number) */
  contactNo: string;
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
  /** بخش (Department) */
  department: string;
  /** آموزش (Training) */
  training: string;
  /** نوع کاربر (User Type) */
  userType: string;
  /** نوع مخاطب (Contact Type) */
  contactType: string;
  /** نام شرکت */
  companyName: string;
  /** لینک به حساب */
  linkAccountId?: string;
  /** ایمیل */
  email: string;
  /** ایمیل دوم */
  emailSecondary: string;
  /** ایمیل دیگر (Other Email) */
  otherEmail: string;
  /** شماره تماس */
  phone: string;
  /** تلفن منزل (Home Phone) */
  homePhone: string;
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
  
  // Mailing Address
  /** شهر (پستی) */
  mailingCity: string;
  /** خیابان (پستی) */
  mailingStreet: string;
  /** کشور (پستی) */
  mailingCountry: string;
  /** استان (پستی) */
  mailingState: string;
  /** صندوق پستی (پستی) */
  mailingPoBox: string;
  /** کد پستی (پستی) */
  mailingZip: string;
  
  // Other Address
  /** کشور (دیگر) */
  otherCountry: string;
  /** شهر (دیگر) */
  otherCity: string;
  /** استان (دیگر) */
  otherState: string;
  /** کد پستی (دیگر) */
  otherZip: string;
  /** خیابان (دیگر) */
  otherStreet: string;
  /** صندوق پستی (دیگر) */
  otherPoBox: string;
  
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
  /** نام تصویر (Image Name) */
  imageName: string;
  /** عدم تماس (Do Not Call) */
  doNotCall: boolean;
  /** عدم دریافت ایمیل (Email Opt Out) */
  emailOptOut: boolean;
  /** مرجع (Reference) */
  reference: boolean;
  /** اطلاع به مالک (Notify Owner) */
  notifyOwner: boolean;
  /** آیا از Lead تبدیل شده است */
  isConvertedFromLead: boolean;
  /** دستیار (Assistant) */
  assistant: string;
  /** شماره تماس دستیار (Assistant Phone) */
  assistantPhone: string;
  /** آخرین درخواست تماس (Last Stay in Touch Request) */
  lastStayInTouchRequest?: number;
  /** تاریخ آخرین ذخیره تماس (Last Stay in Touch Save Date) */
  lastStayInTouchSaveDate?: Date;
  /** منبع سرنخ (Lead Source) */
  leadSource: string;
  /** داده‌های اضافی JSON */
  otherDataJson: string;
}


