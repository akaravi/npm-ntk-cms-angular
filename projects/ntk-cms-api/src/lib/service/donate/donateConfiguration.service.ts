import { Injectable } from '@angular/core';
import {
  DonateModuleConfigAdminMainValuesModel,
  DonateModuleConfigSiteAccessValuesModel,
  DonateModuleConfigSiteValuesModel,
  DonateModuleSiteStorageValuesModel
} from '../../models/entity/donate/donateConfigurationModel';
import { ApiServerConfigSiteBase } from '../base/apiServerConfigSiteBase.service';

@Injectable()
export class DonateConfigurationService extends
  ApiServerConfigSiteBase<DonateModuleConfigAdminMainValuesModel,
    DonateModuleConfigSiteValuesModel,
    DonateModuleConfigSiteAccessValuesModel,
    DonateModuleSiteStorageValuesModel> {
  getModuleControllerUrl(): string {
    return 'Donate';
  }
}
