import { BaseModuleEntity } from "../base/baseModuleEntity";

//@@tag-Version-2201011
/**
 * حساب CRM (Account) برای مدیریت شرکت/سازمان و اطلاعات هویتی/مالی
 */
export class CrmAccountModel extends BaseModuleEntity<string> {
  /** نام حساب/شرکت */
  name: string;
  /** نام مستعار */
  alias: string;
  /** شماره ثبت */
  registrationNumber: string;
  /** شماره ملی */
  nationalId: string;
  /** شماره اقتصادی */
  economicCode: string;
  /** نوع حساب (Customer/Partner/Competitor/...) */
  accountType: string;
  /** صنعت */
  industry: string;
  /** تعداد کارمندان */
  numberOfEmployees?: number;
  /** درآمد سالانه */
  annualRevenue?: number;
  /** رتبه (Tier 1/2/3) */
  tier: string;
  /** ایمیل */
  email: string;
  /** شماره تماس */
  phone: string;
  /** فکس */
  fax: string;
  /** وب‌سایت */
  website: string;
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
  /** لینک حساب والد */
  linkParentAccountId?: string;
  /** عکس اصلی */
  linkMainImageId?: number;
  /** آدرس عکس اصلی */
  linkMainImageIdSrc?: string;
  /** داده‌های اضافی JSON */
  otherDataJson: string;
}


