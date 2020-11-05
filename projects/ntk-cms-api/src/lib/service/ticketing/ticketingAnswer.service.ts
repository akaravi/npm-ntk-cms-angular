import {  Observable } from 'rxjs';
import { TicketingAnswerModel } from '../../models/entity/ticketing/ticketingAnswerModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

export class TicketingAnswerService extends ApiCmsServerBase<TicketingAnswerModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'TicketingAnswer';
  }


}
