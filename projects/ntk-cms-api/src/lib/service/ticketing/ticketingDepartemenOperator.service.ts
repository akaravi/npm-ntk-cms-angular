import { TicketingDepartemenOperatorModel } from '../../models/entity/ticketing/TicketingDepartemenOperatorModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';


@Injectable()
export class TicketingDepartemenOperatorService extends ApiCmsServerBase<TicketingDepartemenOperatorModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'TicketingDepartemenOperator';
  }


}
