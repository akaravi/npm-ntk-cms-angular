import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import {
  ContactModuleConfigAdminMainValuesModel,
  ContactModuleConfigSiteAccessValuesModel,
  ContactModuleConfigSiteValuesModel,
  ContactModuleSiteStorageValuesModel
} from '../../models/entity/contact/contactConfigurationModel';
import { ApiServerConfigSiteBase } from '../base/apiServerConfigSiteBase.service';

@Injectable()
export class ContactConfigurationService extends
  ApiServerConfigSiteBase<ContactModuleConfigAdminMainValuesModel,
  ContactModuleConfigSiteValuesModel,
  ContactModuleConfigSiteAccessValuesModel,
  ContactModuleSiteStorageValuesModel> {
  getModuleControllerUrl(): string {
    return 'contact';
  }
}
