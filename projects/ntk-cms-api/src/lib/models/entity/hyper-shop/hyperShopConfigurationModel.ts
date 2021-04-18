import { EnumHyperShopConnectionType } from '../../enums/enumHyperShopConnectionType';
import { BaseModuleConfigAdminMainValuesModel } from '../base-config/baseModuleConfigAdminMainValuesModel';
import { BaseModuleConfigSiteAccessValuesModel } from '../base-config/baseModuleConfigSiteAccessValuesModel';
import { BaseModuleConfigSiteValuesModel } from '../base-config/baseModuleConfigSiteValuesModel';
import { BaseModuleSiteStorageValuesModel } from '../base-config/baseModuleSiteStorageValuesModel';

export class HyperShopModuleConfigAdminMainValuesModel extends BaseModuleConfigAdminMainValuesModel
{
  DefaultCategorySiteId: number;
  DefaultSourceApplicationId: number;
}

export class HyperShopModuleConfigSiteAccessValuesModel extends BaseModuleConfigSiteAccessValuesModel
{
  /// <summary>
  /// تمام مدارک درگاه اشتراکی تایید شده است
  /// </summary>
  BankSharingMethodClaimIsApproved: boolean;
  /// <summary>
  /// تمام مدارک درگاه بانکی کاربر تایید شده است
  /// </summary>
  UserPaymentMethodIsApproved: boolean;
}

/// <summary>
/// با ثبت یک هایپر شاپ باید یک ردیف خام با مقادیر اولیه در بانک ثبت شود
/// این کار باید از سمت سرور انجام شود و کلاینت اجازه ویرایش یا حذف این ردیف را نداشته باشد
/// </summary>
export class HyperShopModuleConfigSiteValuesModel extends BaseModuleConfigSiteValuesModel
{
  HyperShopConnectionType: EnumHyperShopConnectionType;
  /// <summary>
  /// پرداخت در محل فعال است
  /// </summary>
  InPlacePaymentMethodIsEnabled: boolean;
  /// <summary>
  /// درگاه اشتراکی فعال است
  /// </summary>
  BankSharingMethodIsEnabled: boolean;
  /// <summary>
  /// درگاه بانکی کاربر فعال است
  /// </summary>
  UserPaymentMethodIsEnabled: boolean;
  /// <summary>
  /// اتصال توسط ادرس ای پی آی
  /// </summary>
  HyperShopApiUrl: string;
  /// <summary>
  /// کش کردن محصولات در سرور مرکزی
  /// </summary>
  DataCacheIsEnabled: boolean;
  /// <summary>
  /// تایید فاکترو در صورت آفلاین بودن میکرو سرویس
  /// </summary>
  DataOrderAcceptAutoIfMicroServiceOfflineIsEnabled: boolean;

}

export class HyperShopModuleSiteStorageValuesModel extends BaseModuleSiteStorageValuesModel
{

}
