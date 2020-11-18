import { TicketingDepartemenLogModel } from '../../models/entity/ticketing/TicketingDepartemenLogModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';


@Injectable()
export class TicketingDepartemenLogService extends ApiCmsServerBase<TicketingDepartemenLogModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'TicketingDepartemenLog';
  }


}
