import { Injectable } from '@angular/core';
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
