import { Injectable } from '@angular/core';
import {
  BiographyModuleConfigAdminMainValuesModel,
  BiographyModuleConfigSiteAccessValuesModel,
  BiographyModuleConfigSiteValuesModel,
  BiographyModuleSiteStorageValuesModel
} from '../../models/entity/biography/biographySiteConfigModel';
import { ApiServerConfigSiteBase } from '../base/apiServerConfigSiteBase.service';

@Injectable()
export class BiographyConfigSiteService extends
  ApiServerConfigSiteBase<BiographyModuleConfigAdminMainValuesModel,
  BiographyModuleConfigSiteValuesModel,
  BiographyModuleConfigSiteAccessValuesModel,
  BiographyModuleSiteStorageValuesModel> {
  getModuleCotrolerUrl(): string {
    return 'biography';
  }
}
