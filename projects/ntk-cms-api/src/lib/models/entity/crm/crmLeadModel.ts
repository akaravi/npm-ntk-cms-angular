import { BaseModuleEntity } from "../base/baseModuleEntity";

//@@tag-Version-2201011
/**
 * سرنخ CRM (Lead) شامل اطلاعات اولیه مشتری بالقوه و وضعیت تبدیل
 */
export class CrmLeadModel extends BaseModuleEntity<string> {
  /** عنوان سرنخ */
  title: string;
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


