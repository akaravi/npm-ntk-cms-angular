import { Injectable } from '@angular/core';
import {
  EstateModuleConfigAdminMainValuesModel,
  EstateModuleConfigSiteAccessValuesModel,
  EstateModuleConfigSiteValuesModel,
  EstateModuleSiteStorageValuesModel
} from '../../models/entity/estate/estateConfigurationModel';
import { ApiServerConfigSiteBase } from '../base/apiServerConfigSiteBase.service';

@Injectable({
  providedIn: 'root',
})
export class EstateConfigurationService extends
  ApiServerConfigSiteBase<EstateModuleConfigAdminMainValuesModel,
  EstateModuleConfigSiteValuesModel,
  EstateModuleConfigSiteAccessValuesModel,
  EstateModuleSiteStorageValuesModel> {
  getModuleCotrolerUrl(): string {
    return 'Estate';
  }
}
