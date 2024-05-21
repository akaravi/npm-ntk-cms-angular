import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { TicketingDepartemenLogModel } from '../../models/entity/ticketing/ticketingDepartemenLogModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class TicketingDepartemenLogService extends ApiCmsServerBase<TicketingDepartemenLogModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'TicketingDepartemenLog';
  }


}
