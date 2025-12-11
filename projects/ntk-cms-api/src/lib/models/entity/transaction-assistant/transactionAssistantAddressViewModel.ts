import { BaseModuleEntity } from '../base/baseModuleEntity';

/**
 * transactionAssistantAddressViewModel
 * آدرس تحویل با فیلدهای Link*
 */
export class transactionAssistantAddressViewModel extends BaseModuleEntity<string> {
  /** شناسه کاربر هسته صاحب آدرس (اختیاری برای مهمان) */
  linkCoreUserId?: number;
  /** شناسه استان */
  provinceId?: number;
  /** شهر */
  city: string;
  /** خط آدرس کامل */
  addressLine: string;
  /** کد پستی */
  postalCode?: string;
  /** نام شخص تماس گیرنده */
  contactName?: string;
  /** شماره تماس شخص گیرنده */
  contactPhone?: string;
}


