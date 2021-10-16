import { Injectable } from '@angular/core';
import {
  ApplicationModuleConfigAdminMainValuesModel,
  ApplicationModuleConfigSiteAccessValuesModel,
  ApplicationModuleConfigSiteValuesModel,
  ApplicationModuleSiteStorageValuesModel
} from '../../models/entity/application/applicationConfigurationModel';
import { ApiServerConfigSiteBase } from '../base/apiServerConfigSiteBase.service';

@Injectable()
export class ApplicationConfigurationService extends
  ApiServerConfigSiteBase<ApplicationModuleConfigAdminMainValuesModel,
  ApplicationModuleConfigSiteValuesModel,
  ApplicationModuleConfigSiteAccessValuesModel,
  ApplicationModuleSiteStorageValuesModel> {
  getModuleCotrolerUrl(): string {
    return 'Application';
  }
}
