import { TicketingTemplateModel } from '../../models/entity/ticketing/ticketingTemplateModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';


@Injectable()
export class TicketingTemplateService extends ApiCmsServerBase<TicketingTemplateModel, number>  {
  getModuleControllerUrl(): string {
    return 'TicketingTemplate';
  }


}
