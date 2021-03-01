import { BaseModuleConfigAdminMainValuesModel } from '../baseConfig/baseModuleConfigAdminMainValuesModel';
import { BaseModuleConfigSiteAccessValuesModel } from '../baseConfig/baseModuleConfigSiteAccessValuesModel';
import { BaseModuleConfigSiteValuesModel } from '../baseConfig/baseModuleConfigSiteValuesModel';
import { BaseModuleSiteStorageValuesModel } from '../baseConfig/baseModuleSiteStorageValuesModel';

export class ModuleConfigAdminMainValuesModel extends BaseModuleConfigAdminMainValuesModel
{

}

export class ModuleConfigSiteAccessValuesModel extends BaseModuleConfigSiteAccessValuesModel
{

}

/// <summary>
/// با ثبت یک هایپر شاپ باید یک ردیف خام با مقادیر اولیه در بانک ثبت شود
/// این کار باید از سمت سرور انجام شود و کلاینت اجازه ویرایش یا حذف این ردیف را نداشته باشد
/// </summary>
export class ModuleConfigSiteValuesModel extends BaseModuleConfigSiteValuesModel
{


}

export class ModuleSiteStorageValuesModel extends BaseModuleSiteStorageValuesModel
{

}
