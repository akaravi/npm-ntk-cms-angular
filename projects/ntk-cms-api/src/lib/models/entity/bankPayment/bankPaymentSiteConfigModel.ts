import { BaseModuleConfigAdminMainValuesModel } from '../baseConfig/baseModuleConfigAdminMainValuesModel';
import { BaseModuleConfigSiteAccessValuesModel } from '../baseConfig/baseModuleConfigSiteAccessValuesModel';
import { BaseModuleConfigSiteValuesModel } from '../baseConfig/baseModuleConfigSiteValuesModel';
import { BaseModuleSiteStorageValuesModel } from '../baseConfig/baseModuleSiteStorageValuesModel';

export class BankPaymentModuleConfigAdminMainValuesModel extends BaseModuleConfigAdminMainValuesModel
{

}

export class BankPaymentModuleConfigSiteAccessValuesModel extends BaseModuleConfigSiteAccessValuesModel
{

}

/// <summary>
/// با ثبت یک هایپر شاپ باید یک ردیف خام با مقادیر اولیه در بانک ثبت شود
/// این کار باید از سمت سرور انجام شود و کلاینت اجازه ویرایش یا حذف این ردیف را نداشته باشد
/// </summary>
export class BankPaymentModuleConfigSiteValuesModel extends BaseModuleConfigSiteValuesModel
{


}

export class BankPaymentModuleSiteStorageValuesModel extends BaseModuleSiteStorageValuesModel
{

}
