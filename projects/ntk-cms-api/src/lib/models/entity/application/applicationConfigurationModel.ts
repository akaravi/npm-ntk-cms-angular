import { BaseModuleConfigAdminMainValuesModel } from '../baseConfig/baseModuleConfigAdminMainValuesModel';
import { BaseModuleConfigSiteAccessValuesModel } from '../baseConfig/baseModuleConfigSiteAccessValuesModel';
import { BaseModuleConfigSiteValuesModel } from '../baseConfig/baseModuleConfigSiteValuesModel';
import { BaseModuleSiteStorageValuesModel } from '../baseConfig/baseModuleSiteStorageValuesModel';

export class ApplicationModuleConfigAdminMainValuesModel extends BaseModuleConfigAdminMainValuesModel
{

}

export class ApplicationModuleConfigSiteAccessValuesModel extends BaseModuleConfigSiteAccessValuesModel
{
  MaxAppCreation: number;
}

/// <summary>
/// با ثبت یک هایپر شاپ باید یک ردیف خام با مقادیر اولیه در بانک ثبت شود
/// این کار باید از سمت سرور انجام شود و کلاینت اجازه ویرایش یا حذف این ردیف را نداشته باشد
/// </summary>
export class ApplicationModuleConfigSiteValuesModel extends BaseModuleConfigSiteValuesModel
{


}

export class ApplicationModuleSiteStorageValuesModel extends BaseModuleSiteStorageValuesModel
{
  UpdatedApplicationContent: Date;
}
