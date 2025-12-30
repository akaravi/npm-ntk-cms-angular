import { LanguageEnum } from '../../enums/base/languageEnum';
import { ManageUserAccessAreaTypesEnum } from '../../enums/base/manageUserAccessAreaTypesEnum';
import { ManageUserAccessUserTypesEnum } from '../../enums/base/manageUserAccessUserTypesEnum';
import { UserActivateTypesEnum } from '../../enums/base/userActivateTypesEnum';
import { BaseEntity } from '../base/baseEntity';
//@@tag-Version-2201011
export class CoreTokenAuthUserModel extends BaseEntity<string> {
  /** هش توکن دسترسی دستگاه */
  accessDeviceTokenHash: string;

  /** هش توکن دسترسی */
  accessTokenHash: string;

  /** تاریخ انقضای توکن دسترسی */
  accessTokenExpiresDateTime: Date;

  /** هش شناسه توکن رفرش */
  refreshTokenIdHash: string;

  /** منبع هش شناسه توکن رفرش */
  refreshTokenIdHashSource: string;

  /** تاریخ انقضای توکن رفرش */
  refreshTokenExpiresDateTime: Date;

  /** لینک به شناسه کاربر */
  linkUserId: number;

  /** لینک به شناسه سایت */
  linkSiteId: number;

  /** آیا به خاطر سپرده شده است؟ */
  isRemember: boolean;

  // #region cms info

  /** زبان کاربر */
  userLanguage: LanguageEnum = LanguageEnum.fa;

  /** شناسه عضویت در ماژول مرکزی */
  linkMemberId: string = '';

  /** شناسه دستگاه */
  linkDeviceId: number;

  /** شناسه اپ در ماژول اپلیکیشن */
  linkApplicationId: number;

  /** گروه کاربری */
  linkUserGroupId: number;

  linkSiteCategoryId: number;

  /** MAC آدرس دستگاه کلاینت */
  deviceClientMAC: string;

  /** آی‌پی دستگاه */
  deviceIp: string;

  /** آیا روی دستگاه به خاطر سپرده شود؟ */
  rememberOnDevice: boolean;

  /** تاریخ و زمان دستگاه */
  deviceDateTime?: Date;

  /** منطقه زمانی دستگاه */
  deviceDateTimeZone?: number;

  // موارد private را نمی‌توان مستقیماً به کلاس مدل TypeScript آورد،
  // خصوصیت‌های private حذف شدند.

  /** نوع دسترسی ناحیه کاربر */
  userAccessAreaType: ManageUserAccessAreaTypesEnum;

  /** نوع کاربر */
  userAccessUserType: ManageUserAccessUserTypesEnum;

  /** آیا مدیر دسترسی به تمام داده‌ها دارد؟ */
  userAccessAdminAllowToAllData: boolean;

  /** آیا مدیر دسترسی به داده‌های حرفه‌ای دارد؟ */
  userAccessAdminAllowToProfessionalData: boolean;

  // #endregion
}


