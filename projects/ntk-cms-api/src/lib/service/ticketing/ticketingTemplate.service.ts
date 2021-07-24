import { TicketingTemplateModel } from '../../models/entity/ticketing/ticketingTemplateModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class TicketingTemplateService extends ApiCmsServerBase<TicketingTemplateModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'TicketingTemplate';
  }


}
