import { Injectable } from '@angular/core';
import {
  DonateModuleConfigAdminMainValuesModel,
  DonateModuleConfigSiteAccessValuesModel,
  DonateModuleConfigSiteValuesModel,
  DonateModuleSiteStorageValuesModel
} from '../../models/entity/donate/donateConfigurationModel';
import { ApiServerConfigSiteBase } from '../base/apiServerConfigSiteBase.service';

@Injectable({
  providedIn: 'root',
})
export class DonateConfigurationService extends
  ApiServerConfigSiteBase<DonateModuleConfigAdminMainValuesModel,
  DonateModuleConfigSiteValuesModel,
  DonateModuleConfigSiteAccessValuesModel,
  DonateModuleSiteStorageValuesModel> {
  getModuleCotrolerUrl(): string {
    return 'Donate';
  }
}
