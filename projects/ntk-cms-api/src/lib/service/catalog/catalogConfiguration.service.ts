import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import {
  CatalogModuleConfigAdminMainValuesModel,
  CatalogModuleConfigSiteAccessValuesModel,
  CatalogModuleConfigSiteValuesModel,
  CatalogModuleSiteStorageValuesModel
} from '../../models/entity/catalog/catalogConfigurationModel';
import { ApiServerConfigSiteBase } from '../base/apiServerConfigSiteBase.service';

@Injectable()
export class CatalogConfigurationService extends
  ApiServerConfigSiteBase<CatalogModuleConfigAdminMainValuesModel,
  CatalogModuleConfigSiteValuesModel,
  CatalogModuleConfigSiteAccessValuesModel,
  CatalogModuleSiteStorageValuesModel> {
  getModuleControllerUrl(): string {
    return 'Catalog';
  }
}
