import { Injectable } from '@angular/core';
import {
  EstateModuleConfigAdminMainValuesModel,
  EstateModuleConfigSiteAccessValuesModel,
  EstateModuleConfigSiteValuesModel,
  EstateModuleSiteStorageValuesModel
} from '../../models/entity/estate/estateConfigurationModel';
import { ApiServerConfigSiteBase } from '../base/apiServerConfigSiteBase.service';

@Injectable()
export class EstateConfigurationService extends
  ApiServerConfigSiteBase<EstateModuleConfigAdminMainValuesModel,
  EstateModuleConfigSiteValuesModel,
  EstateModuleConfigSiteAccessValuesModel,
  EstateModuleSiteStorageValuesModel> {
  getModuleControllerUrl(): string {
    return 'Estate';
  }
}
