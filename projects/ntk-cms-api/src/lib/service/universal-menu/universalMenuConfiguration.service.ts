import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import {
  UniversalMenuModuleConfigAdminMainValuesModel,
  UniversalMenuModuleConfigSiteAccessValuesModel,
  UniversalMenuModuleConfigSiteValuesModel,
  UniversalMenuModuleSiteStorageValuesModel
} from '../../models/entity/universal-menu/universalMenuConfigurationModel';
import { ApiServerConfigSiteBase } from '../base/apiServerConfigSiteBase.service';

@Injectable()
export class UniversalMenuConfigurationService extends
  ApiServerConfigSiteBase<UniversalMenuModuleConfigAdminMainValuesModel,
  UniversalMenuModuleConfigSiteValuesModel,
  UniversalMenuModuleConfigSiteAccessValuesModel,
  UniversalMenuModuleSiteStorageValuesModel> {
  getModuleControllerUrl(): string {
    return 'UniversalMenu';
  }
}
