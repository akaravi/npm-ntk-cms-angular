import { Injectable } from '@angular/core';
import {
  LinkManagementModuleConfigAdminMainValuesModel,
  LinkManagementModuleConfigSiteAccessValuesModel,
  LinkManagementModuleConfigSiteValuesModel,
  LinkManagementModuleSiteStorageValuesModel
} from '../../models/entity/link-management/linkManagementConfigurationModel';
import { ApiServerConfigSiteBase } from '../base/apiServerConfigSiteBase.service';

@Injectable({
  providedIn: 'root',
})
export class LinkManagementConfigurationService extends
  ApiServerConfigSiteBase<LinkManagementModuleConfigAdminMainValuesModel,
  LinkManagementModuleConfigSiteValuesModel,
  LinkManagementModuleConfigSiteAccessValuesModel,
  LinkManagementModuleSiteStorageValuesModel> {
  getModuleCotrolerUrl(): string {
    return 'linkManagement';
  }
}
