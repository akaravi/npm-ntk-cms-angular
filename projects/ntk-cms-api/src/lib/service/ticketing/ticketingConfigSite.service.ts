import { Injectable } from '@angular/core';
import {
  TicketingModuleConfigAdminMainValuesModel,
  TicketingModuleConfigSiteAccessValuesModel,
  TicketingModuleConfigSiteValuesModel,
  TicketingModuleSiteStorageValuesModel
} from '../../models/entity/ticketing/ticketingSiteConfigModel';
import { ApiServerConfigSiteBase } from '../base/apiServerConfigSiteBase.service';

@Injectable()
export class TicketingConfigSiteService extends
  ApiServerConfigSiteBase<TicketingModuleConfigAdminMainValuesModel,
  TicketingModuleConfigSiteValuesModel,
  TicketingModuleConfigSiteAccessValuesModel,
  TicketingModuleSiteStorageValuesModel> {
  getModuleCotrolerUrl(): string {
    return 'ticketing';
  }
}
