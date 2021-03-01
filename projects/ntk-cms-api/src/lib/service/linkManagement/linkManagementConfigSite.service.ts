import { Injectable } from '@angular/core';
import {
  LinkManagementModuleConfigAdminMainValuesModel,
  LinkManagementModuleConfigSiteAccessValuesModel,
  LinkManagementModuleConfigSiteValuesModel,
  LinkManagementModuleSiteStorageValuesModel
} from '../../models/entity/linkManagement/linkManagementSiteConfigModel';
import { ApiServerConfigSiteBase } from '../base/apiServerConfigSiteBase.service';

@Injectable()
export class LinkManagementConfigSiteService extends
  ApiServerConfigSiteBase<LinkManagementModuleConfigAdminMainValuesModel,
  LinkManagementModuleConfigSiteValuesModel,
  LinkManagementModuleConfigSiteAccessValuesModel,
  LinkManagementModuleSiteStorageValuesModel> {
  getModuleCotrolerUrl(): string {
    return 'linkManagement';
  }
}
