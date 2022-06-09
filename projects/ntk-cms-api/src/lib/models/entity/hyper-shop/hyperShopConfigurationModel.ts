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
  bankSharingMethodClaimIsApproved: boolean;
  /// <summary>
  /// تمام مدارک درگاه بانکی کاربر تایید شده است
  /// </summary>
  userPaymentMethodIsApproved: boolean;
}

/// <summary>
/// با ثبت یک هایپر شاپ باید یک ردیف خام با مقادیر اولیه در بانک ثبت شود
/// این کار باید از سمت سرور انجام شود و کلاینت اجازه ویرایش یا حذف این ردیف را نداشته باشد
/// </summary>
export class HyperShopModuleConfigSiteValuesModel extends BaseModuleConfigSiteValuesModel
{
  hyperShopConnectionType: EnumHyperShopConnectionType;
  /// <summary>
  /// پرداخت در محل فعال است
  /// </summary>
  inPlacePaymentMethodIsEnabled: boolean;
  /// <summary>
  /// درگاه اشتراکی فعال است
  /// </summary>
  bankSharingMethodIsEnabled: boolean;
  /// <summary>
  /// درگاه بانکی کاربر فعال است
  /// </summary>
  userPaymentMethodIsEnabled: boolean;
  /// <summary>
  /// اتصال توسط ادرس ای پی آی
  /// </summary>
  hyperShopApiUrl: string;
  /// <summary>
  /// کش کردن محصولات در سرور مرکزی
  /// </summary>
  dataCacheIsEnabled: boolean;
  /// <summary>
  /// تایید فاکترو در صورت آفلاین بودن میکرو سرویس
  /// </summary>
  dataOrderAcceptAutoIfMicroServiceOfflineIsEnabled: boolean;

}

export class HyperShopModuleSiteStorageValuesModel extends BaseModuleSiteStorageValuesModel
{

}
