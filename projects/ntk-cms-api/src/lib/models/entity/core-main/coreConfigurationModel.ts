import { EnumRecordStatus } from '../../enums/base/recordStatusEnum';
import { BaseModuleConfigAdminMainValuesModel } from '../base-config/baseModuleConfigAdminMainValuesModel';
import { BaseModuleConfigSiteAccessValuesModel } from '../base-config/baseModuleConfigSiteAccessValuesModel';
import { BaseModuleConfigSiteValuesModel } from '../base-config/baseModuleConfigSiteValuesModel';
import { BaseModuleSiteStorageValuesModel } from '../base-config/baseModuleSiteStorageValuesModel';

export class CoreModuleConfigAdminMainValuesModel extends BaseModuleConfigAdminMainValuesModel {
  domainsList: string;
  adminCpUserRegidteryBool: boolean;
  adminCpUserRegidteryExpireDateDay: number;
  userMembershipRuleHtmlBody: string;
}

export class CoreModuleConfigSiteAccessValuesModel extends BaseModuleConfigSiteAccessValuesModel {
  maxAdminCpUserCreation: number;
  maxUserCreation: number;
  domainsList: string;
}

/// <summary>
/// با ثبت یک هایپر شاپ باید یک ردیف خام با مقادیر اولیه در بانک ثبت شود
/// این کار باید از سمت سرور انجام شود و کلاینت اجازه ویرایش یا حذف این ردیف را نداشته باشد
/// </summary>
export class CoreModuleConfigSiteValuesModel extends BaseModuleConfigSiteValuesModel {

  domainsGoogleSitekey: string;
  domainsGoogleSecretkey: string;
  userRegidteryBool: boolean;
  userRegidteryRecordStatus: EnumRecordStatus;
  userRegidteryExpireDateDay: number;
  rssCount: number;
}

export class CoreModuleSiteStorageValuesModel extends BaseModuleSiteStorageValuesModel {
  adminCpUserCreation: number;
  userCreation: number;
}
