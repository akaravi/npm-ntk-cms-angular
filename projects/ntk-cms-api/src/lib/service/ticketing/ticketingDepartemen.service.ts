import {  Observable } from 'rxjs';
import { TicketingDepartemenModel } from '../../models/entity/ticketing/TicketingDepartemenModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

export class TicketingDepartemenService extends ApiCmsServerBase<TicketingDepartemenModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'TicketingDepartemen';
  }


}
