import { TicketingTemplateModel } from '../../models/entity/ticketing/TicketingTemplateModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';


@Injectable()
export class TicketingTemplateService extends ApiCmsServerBase<TicketingTemplateModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'TicketingTemplate';
  }


}
