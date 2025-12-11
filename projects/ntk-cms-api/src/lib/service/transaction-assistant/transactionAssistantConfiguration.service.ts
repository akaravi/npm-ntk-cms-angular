import { Injectable } from '@angular/core';
import { BaseModuleConfigAdminMainValuesModel } from '../../models/entity/base-config/baseModuleConfigAdminMainValuesModel';
import { BaseModuleConfigSiteAccessValuesModel } from '../../models/entity/base-config/baseModuleConfigSiteAccessValuesModel';
import { BaseModuleConfigSiteValuesModel } from '../../models/entity/base-config/baseModuleConfigSiteValuesModel';
import { BaseModuleSiteStorageValuesModel } from '../../models/entity/base-config/baseModuleSiteStorageValuesModel';
import { ApiServerConfigSiteBase } from '../base/apiServerConfigSiteBase.service';

@Injectable()
export class TransactionAssistantConfigurationService extends
  ApiServerConfigSiteBase<BaseModuleConfigAdminMainValuesModel,
    BaseModuleConfigSiteValuesModel,
    BaseModuleConfigSiteAccessValuesModel,
    BaseModuleSiteStorageValuesModel> {
  getModuleControllerUrl(): string {
    return 'TransactionAssistantConfiguration';
  }
}

