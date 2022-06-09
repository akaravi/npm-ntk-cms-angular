import { BaseModuleConfigAdminMainValuesModel } from '../base-config/baseModuleConfigAdminMainValuesModel';
import { BaseModuleConfigSiteAccessValuesModel } from '../base-config/baseModuleConfigSiteAccessValuesModel';
import { BaseModuleConfigSiteValuesModel } from '../base-config/baseModuleConfigSiteValuesModel';
import { BaseModuleSiteStorageValuesModel } from '../base-config/baseModuleSiteStorageValuesModel';

export class NewsModuleConfigAdminMainValuesModel extends BaseModuleConfigAdminMainValuesModel
{

}

export class NewsModuleConfigSiteAccessValuesModel extends BaseModuleConfigSiteAccessValuesModel
{

}

/// <summary>
/// با ثبت یک هایپر شاپ باید یک ردیف خام با مقادیر اولیه در بانک ثبت شود
/// این کار باید از سمت سرور انجام شود و کلاینت اجازه ویرایش یا حذف این ردیف را نداشته باشد
/// </summary>
export class NewsModuleConfigSiteValuesModel extends BaseModuleConfigSiteValuesModel
{


}

export class NewsModuleSiteStorageValuesModel extends BaseModuleSiteStorageValuesModel
{
  updatedNewsContent: Date;
  updatedNewsCategory: Date;
}
