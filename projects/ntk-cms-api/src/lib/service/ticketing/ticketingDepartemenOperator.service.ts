import {  Observable } from 'rxjs';
import { TicketingDepartemenOperatorModel } from '../../models/entity/ticketing/TicketingDepartemenOperatorModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

export class TicketingDepartemenOperatorService extends ApiCmsServerBase<TicketingDepartemenOperatorModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'TicketingDepartemenOperator';
  }


}
