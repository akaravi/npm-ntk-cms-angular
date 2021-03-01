import { Injectable } from '@angular/core';
import {
  PollingModuleConfigAdminMainValuesModel,
  PollingModuleConfigSiteAccessValuesModel,
  PollingModuleConfigSiteValuesModel,
  PollingModuleSiteStorageValuesModel
} from '../../models/entity/polling/pollingSiteConfigModel';
import { ApiServerConfigSiteBase } from '../base/apiServerConfigSiteBase.service';

@Injectable()
export class PollingConfigSiteService extends
  ApiServerConfigSiteBase<PollingModuleConfigAdminMainValuesModel,
  PollingModuleConfigSiteValuesModel,
  PollingModuleConfigSiteAccessValuesModel,
  PollingModuleSiteStorageValuesModel> {
  getModuleCotrolerUrl(): string {
    return 'polling';
  }
}
