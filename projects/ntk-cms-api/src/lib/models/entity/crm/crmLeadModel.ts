import { BaseModuleEntity } from "../base/baseModuleEntity";

//@@tag-Version-2201011
/**
 * سرنخ CRM (Lead) شامل اطلاعات اولیه مشتری بالقوه و وضعیت تبدیل
 */
export class CrmLeadModel extends BaseModuleEntity<string> {
  /** شماره Lead (Lead Number) */
  leadNo: string;
  /** عنوان سرنخ */
  title: string;
  /** عنوان شغلی (Mr/Mrs/Dr/…) */
  salutation: string;
  /** نام */
  firstName: string;
  /** نام خانوادگی */
  lastName: string;
  /** نام شرکت */
  companyName: string;
  /** ایمیل */
  email: string;
  /** شماره تماس */
  phone: string;
  /** موبایل */
  mobile: string;
  /** وب‌سایت */
  website: string;
  /** منبع سرنخ */
  leadSource: string;
  /** وضعیت سرنخ */
  leadStatus: string;
  /** رتبه سرنخ (Hot/Warm/Cold) */
  rating: string;
  /** علاقه (Interest) */
  interest: string;
  /** سمت (Designation) */
  designation: string;
  /** اولویت (Priority) */
  priority: string;
  /** صنعت */
  industry: string;
  /** تعداد کارمندان */
  numberOfEmployees?: number;
  /** درآمد سالانه */
  annualRevenue?: number;
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
  
  // Lead Address
  /** شهر آدرس Lead */
  leadAddressCity: string;
  /** کد پستی آدرس Lead */
  leadAddressPostalCode: string;
  /** استان آدرس Lead */
  leadAddressState: string;
  /** صندوق پستی آدرس Lead */
  leadAddressPoBox: string;
  /** کشور آدرس Lead */
  leadAddressCountry: string;
  /** شماره تماس آدرس Lead */
  leadAddressPhone: string;
  /** موبایل آدرس Lead */
  leadAddressMobile: string;
  /** فکس آدرس Lead */
  leadAddressFax: string;
  /** خیابان آدرس Lead */
  leadAddressStreet: string;
  /** نوع آدرس Lead */
  leadAddressType: string;
  
  /** توضیحات */
  description: string;
  /** یادداشت‌ها */
  notes: string;
  /** لینک به حساب */
  linkAccountId?: string;
  /** لینک به مخاطب */
  linkContactId?: string;
  /** لینک به کمپین */
  linkCampaignId?: string;
  /** لینک کاربر اختصاص داده شده */
  linkAssignedUserId?: number;
  /** ایمیل دوم (Secondary Email) */
  secondaryEmail: string;
  /** درخواست دمو (Demo Request) */
  demoRequest: string;
  /** نسخه محصول (Product Version) */
  productVersion: string;
  /** محصول (Product) */
  product: string;
  /** تاریخ ایمیل (Mail Date) */
  mailDate?: Date;
  /** تاریخ گام بعدی (Next Step Date) */
  nextStepDate?: Date;
  /** وضعیت تأمین مالی (Funding Situation) */
  fundingSituation: string;
  /** هدف (Purpose) */
  purpose: string;
  /** وضعیت ارزیابی (Evaluation Status) */
  evaluationStatus: string;
  /** تاریخ انتقال (Transfer Date) */
  transferDate?: Date;
  /** نوع درآمد (Revenue Type) */
  revenueType: string;
  /** بررسی اختصاص Lead (Assign Lead Check) */
  assignLeadChk: boolean;
  /** عدم دریافت ایمیل (Email Opt Out) */
  emailOptOut: boolean;
  /** تاریخ تبدیل به فرصت */
  convertedDate?: Date;
  /** آیا تبدیل شده است */
  isConverted: boolean;
  /** لینک به فرصت تبدیل‌شده */
  linkConvertedOpportunityId?: string;
  /** لینک به حساب تبدیل‌شده */
  linkConvertedAccountId?: string;
  /** لینک به مخاطب تبدیل‌شده */
  linkConvertedContactId?: string;
  /** داده‌های اضافی JSON */
  otherDataJson: string;
  /** عکس اصلی */
  linkMainImageId?: number;
  /** آدرس عکس اصلی */
  linkMainImageIdSrc?: string;
}


