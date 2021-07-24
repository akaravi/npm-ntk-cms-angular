import { Injectable } from '@angular/core';
import {
  ModuleConfigAdminMainValuesModel,
  ModuleConfigSiteAccessValuesModel,
  ModuleConfigSiteValuesModel,
  ModuleSiteStorageValuesModel
} from '../../models/entity/file/fileConfigurationModel';
import { ApiServerConfigSiteBase } from '../base/apiServerConfigSiteBase.service';

@Injectable({
  providedIn: 'root',
})
export class FileConfigurationService extends
  ApiServerConfigSiteBase<ModuleConfigAdminMainValuesModel,
  ModuleConfigSiteValuesModel,
  ModuleConfigSiteAccessValuesModel,
  ModuleSiteStorageValuesModel> {
  getModuleCotrolerUrl(): string {
    return 'file';
  }
}
