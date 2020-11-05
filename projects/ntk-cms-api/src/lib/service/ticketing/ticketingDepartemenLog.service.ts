import {  Observable } from 'rxjs';
import { TicketingDepartemenLogModel } from '../../models/entity/ticketing/TicketingDepartemenLogModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

export class TicketingDepartemenLogService extends ApiCmsServerBase<TicketingDepartemenLogModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'TicketingDepartemenLog';
  }


}
