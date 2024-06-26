import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { TicketingTemplateModel } from '../../models/entity/ticketing/ticketingTemplateModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class TicketingTemplateService extends ApiCmsServerBase<TicketingTemplateModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'TicketingTemplate';
  }


}
