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
  /** رتبه‌بندی حساب (Rating) */
  rating: string;
  /** مالکیت (Ownership) */
  ownership: string;
  /** کد SIC (Standard Industrial Classification) */
  sicCode: string;
  /** نماد بورس (Ticker Symbol) */
  tickerSymbol: string;
  /** شماره حساب (Account Number) */
  accountNo: string;
  /** ایمیل */
  email: string;
  /** ایمیل دوم */
  email2: string;
  /** شماره تماس */
  phone: string;
  /** شماره تماس دیگر */
  otherPhone: string;
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
  
  // Billing Address
  /** شهر صورتحساب */
  billCity: string;
  /** کد پستی صورتحساب */
  billPostalCode: string;
  /** کشور صورتحساب */
  billCountry: string;
  /** استان صورتحساب */
  billState: string;
  /** خیابان صورتحساب */
  billStreet: string;
  /** صندوق پستی صورتحساب */
  billPoBox: string;
  
  // Shipping Address
  /** شهر ارسال */
  shipCity: string;
  /** کد پستی ارسال */
  shipPostalCode: string;
  /** کشور ارسال */
  shipCountry: string;
  /** استان ارسال */
  shipState: string;
  /** خیابان ارسال */
  shipStreet: string;
  /** صندوق پستی ارسال */
  shipPoBox: string;
  
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
  /** عدم دریافت ایمیل (Email Opt Out) */
  emailOptOut: boolean;
  /** اطلاع به مالک (Notify Owner) */
  notifyOwner: boolean;
  /** آیا از Lead تبدیل شده است */
  isConvertedFromLead: boolean;
}


