import { Injectable } from '@angular/core';
import {
  AapplicationModuleConfigAdminMainValuesModel,
  AapplicationModuleConfigSiteAccessValuesModel,
  AapplicationModuleConfigSiteValuesModel,
  AapplicationModuleSiteStorageValuesModel
} from '../../models/entity/application/applicationSiteConfigModel';
import { ApiServerConfigSiteBase } from '../base/apiServerConfigSiteBase.service';

@Injectable()
export class ApplicationConfigSiteService extends
  ApiServerConfigSiteBase<AapplicationModuleConfigAdminMainValuesModel,
  AapplicationModuleConfigSiteValuesModel,
  AapplicationModuleConfigSiteAccessValuesModel,
  AapplicationModuleSiteStorageValuesModel> {
  getModuleCotrolerUrl(): string {
    return 'Application';
  }
}
