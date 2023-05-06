import { BaseModuleConfigAdminMainValuesModel } from '../base-config/baseModuleConfigAdminMainValuesModel';
import { BaseModuleConfigSiteAccessValuesModel } from '../base-config/baseModuleConfigSiteAccessValuesModel';
import { BaseModuleConfigSiteValuesModel } from '../base-config/baseModuleConfigSiteValuesModel';
import { BaseModuleSiteStorageValuesModel } from '../base-config/baseModuleSiteStorageValuesModel';

export class CatalogModuleConfigAdminMainValuesModel extends BaseModuleConfigAdminMainValuesModel
{

}

export class CatalogModuleConfigSiteAccessValuesModel extends BaseModuleConfigSiteAccessValuesModel
{

}

/// <summary>
/// با ثبت یک هایپر شاپ باید یک ردیف خام با مقادیر اولیه در بانک ثبت شود
/// این کار باید از سمت سرور انجام شود و کلاینت اجازه ویرایش یا حذف این ردیف را نداشته باشد
/// </summary>
export class CatalogModuleConfigSiteValuesModel extends BaseModuleConfigSiteValuesModel
{


}

export class CatalogModuleSiteStorageValuesModel extends BaseModuleSiteStorageValuesModel
{
  updatedNewsContent: Date;
  updatedNewsCategory: Date;
}
