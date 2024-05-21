import { Injectable } from '@angular/core';
import {
  DataProviderModuleConfigAdminMainValuesModel,
  DataProviderModuleConfigSiteAccessValuesModel,
  DataProviderModuleConfigSiteValuesModel,
  DataProviderModuleSiteStorageValuesModel
} from '../../models/entity/data-provider/dataProviderConfigurationModel';
import { ApiServerConfigSiteBase } from '../base/apiServerConfigSiteBase.service';

@Injectable()
export class DataProviderConfigurationService extends
  ApiServerConfigSiteBase<DataProviderModuleConfigAdminMainValuesModel,
    DataProviderModuleConfigSiteValuesModel,
    DataProviderModuleConfigSiteAccessValuesModel,
    DataProviderModuleSiteStorageValuesModel> {
  getModuleControllerUrl(): string {
    return 'DataProvider';
  }
}
