import { TicketingDepartemenOperatorModel } from '../../models/entity/ticketing/ticketingDepartemenOperatorModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';


@Injectable()
export class TicketingDepartemenOperatorService extends ApiCmsServerBase<TicketingDepartemenOperatorModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'TicketingDepartemenOperator';
  }


}
