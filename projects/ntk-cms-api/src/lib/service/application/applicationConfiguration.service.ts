import { Injectable } from '@angular/core';
import {
  AapplicationModuleConfigAdminMainValuesModel,
  AapplicationModuleConfigSiteAccessValuesModel,
  AapplicationModuleConfigSiteValuesModel,
  AapplicationModuleSiteStorageValuesModel
} from '../../models/entity/application/applicationConfigurationModel';
import { ApiServerConfigSiteBase } from '../base/apiServerConfigSiteBase.service';

@Injectable()
export class ApplicationConfigurationService extends
  ApiServerConfigSiteBase<AapplicationModuleConfigAdminMainValuesModel,
  AapplicationModuleConfigSiteValuesModel,
  AapplicationModuleConfigSiteAccessValuesModel,
  AapplicationModuleSiteStorageValuesModel> {
  getModuleCotrolerUrl(): string {
    return 'Application';
  }
}
