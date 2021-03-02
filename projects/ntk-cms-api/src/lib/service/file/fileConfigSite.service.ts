import { Injectable } from '@angular/core';
import {
  ModuleConfigAdminMainValuesModel,
  ModuleConfigSiteAccessValuesModel,
  ModuleConfigSiteValuesModel,
  ModuleSiteStorageValuesModel
} from '../../models/entity/file/fileSiteConfigModel';
import { ApiServerConfigSiteBase } from '../base/apiServerConfigSiteBase.service';

@Injectable()
export class FileConfigSiteService extends
  ApiServerConfigSiteBase<ModuleConfigAdminMainValuesModel,
  ModuleConfigSiteValuesModel,
  ModuleConfigSiteAccessValuesModel,
  ModuleSiteStorageValuesModel> {
  getModuleCotrolerUrl(): string {
    return 'file';
  }
}
