import { TicketingFaqModel } from '../../models/entity/ticketing/ticketingFaqModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';


@Injectable()
export class TicketingFaqService extends ApiCmsServerBase<TicketingFaqModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'TicketingFaq';
  }


}
