import { TicketingAnswerModel } from '../../models/entity/ticketing/ticketingAnswerModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class TicketingAnswerService extends ApiCmsServerBase<TicketingAnswerModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'TicketingAnswer';
  }


}
