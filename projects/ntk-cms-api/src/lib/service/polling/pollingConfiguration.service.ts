import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import {
  PollingModuleConfigAdminMainValuesModel,
  PollingModuleConfigSiteAccessValuesModel,
  PollingModuleConfigSiteValuesModel,
  PollingModuleSiteStorageValuesModel
} from '../../models/entity/polling/pollingConfigurationModel';
import { ApiServerConfigSiteBase } from '../base/apiServerConfigSiteBase.service';

@Injectable()
export class PollingConfigurationService extends
  ApiServerConfigSiteBase<PollingModuleConfigAdminMainValuesModel,
  PollingModuleConfigSiteValuesModel,
  PollingModuleConfigSiteAccessValuesModel,
  PollingModuleSiteStorageValuesModel> {
  getModuleControllerUrl(): string {
    return 'polling';
  }
}
