import {  Observable } from 'rxjs';
import { TicketingTemplateModel } from '../../models/entity/ticketing/TicketingTemplateModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

export class TicketingTemplateService extends ApiCmsServerBase<TicketingTemplateModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'TicketingTemplate';
  }


}
