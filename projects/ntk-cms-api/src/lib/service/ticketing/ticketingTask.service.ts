import {  Observable } from 'rxjs';
import { TicketingTaskModel } from '../../models/entity/ticketing/TicketingTaskModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

export class TicketingTaskService extends ApiCmsServerBase<TicketingTaskModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'TicketingTask';
  }


}
