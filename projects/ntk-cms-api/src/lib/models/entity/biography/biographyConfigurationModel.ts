import { BaseModuleConfigAdminMainValuesModel } from '../baseConfig/baseModuleConfigAdminMainValuesModel';
import { BaseModuleConfigSiteAccessValuesModel } from '../baseConfig/baseModuleConfigSiteAccessValuesModel';
import { BaseModuleConfigSiteValuesModel } from '../baseConfig/baseModuleConfigSiteValuesModel';
import { BaseModuleSiteStorageValuesModel } from '../baseConfig/baseModuleSiteStorageValuesModel';

export class BiographyModuleConfigAdminMainValuesModel extends BaseModuleConfigAdminMainValuesModel
{

}

export class BiographyModuleConfigSiteAccessValuesModel extends BaseModuleConfigSiteAccessValuesModel
{

}

/// <summary>
/// با ثبت یک هایپر شاپ باید یک ردیف خام با مقادیر اولیه در بانک ثبت شود
/// این کار باید از سمت سرور انجام شود و کلاینت اجازه ویرایش یا حذف این ردیف را نداشته باشد
/// </summary>
export class BiographyModuleConfigSiteValuesModel extends BaseModuleConfigSiteValuesModel
{


}

export class BiographyModuleSiteStorageValuesModel extends BaseModuleSiteStorageValuesModel
{
  UpdatedNewsContent: Date;
  UpdatedNewsCategory: Date;
}
