import { BaseModuleConfigAdminMainValuesModel } from '../base-config/baseModuleConfigAdminMainValuesModel';
import { BaseModuleConfigSiteAccessValuesModel } from '../base-config/baseModuleConfigSiteAccessValuesModel';
import { BaseModuleConfigSiteValuesModel } from '../base-config/baseModuleConfigSiteValuesModel';
import { BaseModuleSiteStorageValuesModel } from '../base-config/baseModuleSiteStorageValuesModel';

export class SmsModuleConfigAdminMainValuesModel extends BaseModuleConfigAdminMainValuesModel {
  messageTextFilteringCheck: boolean;
  messageTextFiltering: string;
  messageTextForbiddenCheck: boolean;
  messageTextForbidden: string;
  messageNumberFilteringCheck: boolean;
  messageNumberFiltering: string;
  messageNumberForbiddenCheck: boolean;
  messageNumberForbidden: string;
  messageNumberHiddenCharSymbol:string;
  messageNumberHiddenCharIndexes:number[];
}

export class SmsModuleConfigSiteAccessValuesModel extends BaseModuleConfigSiteAccessValuesModel {

}


export class SmsModuleConfigSiteValuesModel extends BaseModuleConfigSiteValuesModel {
  userFreePanelDay: number;
  userFreePanelCredit: number;
  messageTextFilteringCheck: boolean;
  messageTextFiltering: string;
  messageTextForbiddenCheck: boolean;
  messageTextForbidden: string;
  messageNumberFilteringCheck: boolean;
  messageNumberFiltering: string;
  messageNumberForbiddenCheck: boolean;
  messageNumberForbidden: string;
}

export class SmsModuleSiteStorageValuesModel extends BaseModuleSiteStorageValuesModel {

}
