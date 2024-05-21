import { Injectable } from '@angular/core';
import {
  BiographyModuleConfigAdminMainValuesModel,
  BiographyModuleConfigSiteAccessValuesModel,
  BiographyModuleConfigSiteValuesModel,
  BiographyModuleSiteStorageValuesModel
} from '../../models/entity/biography/biographyConfigurationModel';
import { ApiServerConfigSiteBase } from '../base/apiServerConfigSiteBase.service';

@Injectable()
export class BiographyConfigurationService extends
  ApiServerConfigSiteBase<BiographyModuleConfigAdminMainValuesModel,
    BiographyModuleConfigSiteValuesModel,
    BiographyModuleConfigSiteAccessValuesModel,
    BiographyModuleSiteStorageValuesModel> {
  getModuleControllerUrl(): string {
    return 'biography';
  }
}
