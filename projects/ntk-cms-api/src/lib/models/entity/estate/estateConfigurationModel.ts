import { BaseModuleConfigAdminMainValuesModel } from '../base-config/baseModuleConfigAdminMainValuesModel';
import { BaseModuleConfigSiteAccessValuesModel } from '../base-config/baseModuleConfigSiteAccessValuesModel';
import { BaseModuleConfigSiteValuesModel } from '../base-config/baseModuleConfigSiteValuesModel';
import { BaseModuleSiteStorageValuesModel } from '../base-config/baseModuleSiteStorageValuesModel';

export class EstateModuleConfigAdminMainValuesModel extends BaseModuleConfigAdminMainValuesModel {

}

export class EstateModuleConfigSiteAccessValuesModel extends BaseModuleConfigSiteAccessValuesModel {

}

/// <summary>
/// با ثبت یک هایپر شاپ باید یک ردیف خام با مقادیر اولیه در بانک ثبت شود
/// این کار باید از سمت سرور انجام شود و کلاینت اجازه ویرایش یا حذف این ردیف را نداشته باشد
/// </summary>
export class EstateModuleConfigSiteValuesModel extends BaseModuleConfigSiteValuesModel {
  autoArchiveDataDay: number;
  autoContractByCallDataDay: number;
  aboutAgentMobiles: string;
  aboutAgentTels: string;
  aboutCustomerMobiles: string;
  aboutCustomerTels: string;
  /**ActionSendSms */
  customerOrderActionSendSmsToAgencyAreaWorkMessage: string;
  customerOrderActionSendSmsToAgentAreaWorkMessage: string;
  estateActionSendSmsToAgencyAreaWorkMessage: string;
  estateActionSendSmsToAgentAreaWorkMessage: string;
  /**ActionSendSms */
}

export class EstateModuleSiteStorageValuesModel extends BaseModuleSiteStorageValuesModel {

}
