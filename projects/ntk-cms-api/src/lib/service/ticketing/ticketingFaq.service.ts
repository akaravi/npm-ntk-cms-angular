import {  Observable } from 'rxjs';
import { TicketingFaqModel } from '../../models/entity/ticketing/TicketingFaqModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

export class TicketingFaqService extends ApiCmsServerBase<TicketingFaqModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'TicketingFaq';
  }


}
