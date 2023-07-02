import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import {
  ModuleConfigAdminMainValuesModel,
  ModuleConfigSiteAccessValuesModel,
  ModuleConfigSiteValuesModel,
  ModuleSiteStorageValuesModel
} from '../../models/entity/file/fileConfigurationModel';
import { ApiServerConfigSiteBase } from '../base/apiServerConfigSiteBase.service';

@Injectable()
export class FileConfigurationService extends
  ApiServerConfigSiteBase<ModuleConfigAdminMainValuesModel,
  ModuleConfigSiteValuesModel,
  ModuleConfigSiteAccessValuesModel,
  ModuleSiteStorageValuesModel> {
  getModuleControllerUrl(): string {
    return 'file';
  }
}
