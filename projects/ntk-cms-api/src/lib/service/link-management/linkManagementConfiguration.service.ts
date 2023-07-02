import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import {
  LinkManagementModuleConfigAdminMainValuesModel,
  LinkManagementModuleConfigSiteAccessValuesModel,
  LinkManagementModuleConfigSiteValuesModel,
  LinkManagementModuleSiteStorageValuesModel
} from '../../models/entity/link-management/linkManagementConfigurationModel';
import { ApiServerConfigSiteBase } from '../base/apiServerConfigSiteBase.service';

@Injectable()
export class LinkManagementConfigurationService extends
  ApiServerConfigSiteBase<LinkManagementModuleConfigAdminMainValuesModel,
  LinkManagementModuleConfigSiteValuesModel,
  LinkManagementModuleConfigSiteAccessValuesModel,
  LinkManagementModuleSiteStorageValuesModel> {
  getModuleControllerUrl(): string {
    return 'linkManagement';
  }
}
