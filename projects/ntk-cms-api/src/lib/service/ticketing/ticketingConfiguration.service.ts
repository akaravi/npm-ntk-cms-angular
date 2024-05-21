import { Injectable } from '@angular/core';
import {
  TicketingModuleConfigAdminMainValuesModel,
  TicketingModuleConfigSiteAccessValuesModel,
  TicketingModuleConfigSiteValuesModel,
  TicketingModuleSiteStorageValuesModel
} from '../../models/entity/ticketing/ticketingConfigurationModel';
import { ApiServerConfigSiteBase } from '../base/apiServerConfigSiteBase.service';

@Injectable()
export class TicketingConfigurationService extends
  ApiServerConfigSiteBase<TicketingModuleConfigAdminMainValuesModel,
    TicketingModuleConfigSiteValuesModel,
    TicketingModuleConfigSiteAccessValuesModel,
    TicketingModuleSiteStorageValuesModel> {
  getModuleControllerUrl(): string {
    return 'ticketing';
  }
}
