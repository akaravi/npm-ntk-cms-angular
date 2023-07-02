import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
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
  getModuleControllerUrl(): string {
    return 'Application';
  }
}
