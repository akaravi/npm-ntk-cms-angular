import { BaseModuleConfigAdminMainValuesModel } from '../baseConfig/baseModuleConfigAdminMainValuesModel';
import { BaseModuleConfigSiteAccessValuesModel } from '../baseConfig/baseModuleConfigSiteAccessValuesModel';
import { BaseModuleConfigSiteValuesModel } from '../baseConfig/baseModuleConfigSiteValuesModel';
import { BaseModuleSiteStorageValuesModel } from '../baseConfig/baseModuleSiteStorageValuesModel';

export class ArticleModuleConfigAdminMainValuesModel extends BaseModuleConfigAdminMainValuesModel
{

}

export class ArticleModuleConfigSiteAccessValuesModel extends BaseModuleConfigSiteAccessValuesModel
{

}

/// <summary>
/// با ثبت یک هایپر شاپ باید یک ردیف خام با مقادیر اولیه در بانک ثبت شود
/// این کار باید از سمت سرور انجام شود و کلاینت اجازه ویرایش یا حذف این ردیف را نداشته باشد
/// </summary>
export class ArticleModuleConfigSiteValuesModel extends BaseModuleConfigSiteValuesModel
{


}

export class ArticleModuleSiteStorageValuesModel extends BaseModuleSiteStorageValuesModel
{
  UpdatedNewsContent: Date;
  UpdatedNewsCategory: Date;
}
