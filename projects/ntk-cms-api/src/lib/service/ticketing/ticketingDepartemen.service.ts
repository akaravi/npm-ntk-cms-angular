import { TicketingDepartemenModel } from '../../models/entity/ticketing/TicketingDepartemenModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';


@Injectable()
export class TicketingDepartemenService extends ApiCmsServerBase<TicketingDepartemenModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'TicketingDepartemen';
  }


}
