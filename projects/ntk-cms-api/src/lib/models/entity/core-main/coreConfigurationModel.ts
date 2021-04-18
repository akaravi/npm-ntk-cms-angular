import { EnumRecordStatus } from '../../enums/enumRecordStatus';
import { BaseModuleConfigAdminMainValuesModel } from '../base-config/baseModuleConfigAdminMainValuesModel';
import { BaseModuleConfigSiteAccessValuesModel } from '../base-config/baseModuleConfigSiteAccessValuesModel';
import { BaseModuleConfigSiteValuesModel } from '../base-config/baseModuleConfigSiteValuesModel';
import { BaseModuleSiteStorageValuesModel } from '../base-config/baseModuleSiteStorageValuesModel';

export class CoreModuleConfigAdminMainValuesModel extends BaseModuleConfigAdminMainValuesModel
{
  DomainsList: string;
  AdminCpUserRegidteryBool: boolean;
  AdminCpUserRegidteryExpireDateDay: number;
}

export class CoreModuleConfigSiteAccessValuesModel extends BaseModuleConfigSiteAccessValuesModel
{
  MaxAdminCpUserCreation: number;
  MaxUserCreation: number;
  DomainsList: string;
}

/// <summary>
/// با ثبت یک هایپر شاپ باید یک ردیف خام با مقادیر اولیه در بانک ثبت شود
/// این کار باید از سمت سرور انجام شود و کلاینت اجازه ویرایش یا حذف این ردیف را نداشته باشد
/// </summary>
export class CoreModuleConfigSiteValuesModel extends BaseModuleConfigSiteValuesModel
{

  DomainsGoogleSitekey: string;
  DomainsGoogleSecretkey: string;
  UserRegidteryBool: boolean;
  UserRegidteryRecordStatus: EnumRecordStatus;
  UserRegidteryExpireDateDay: number;
  RSSCount: number;
}

export class CoreModuleSiteStorageValuesModel extends BaseModuleSiteStorageValuesModel
{
  AdminCpUserCreation: number;
  UserCreation: number;
}
