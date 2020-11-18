import { TicketingFaqModel } from '../../models/entity/ticketing/TicketingFaqModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';


@Injectable()
export class TicketingFaqService extends ApiCmsServerBase<TicketingFaqModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'TicketingFaq';
  }


}
