import { TicketingTaskDtoModel } from './../../models/dto/ticketing/ticketingTaskDtoModel';
import { Observable } from 'rxjs';
import { ErrorExcptionResult } from '../../models/entity/base/errorExcptionResult';
import { TicketingTaskModel } from '../../models/entity/ticketing/ticketingTaskModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { map, retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';


@Injectable()
export class TicketingTaskService extends ApiCmsServerBase<TicketingTaskModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'TicketingTask';
  }

  ServiceContactUS(model: TicketingTaskDtoModel): Observable<ErrorExcptionResult<TicketingTaskModel>> {
    if (model == null) {
      model = new TicketingTaskDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/ContactUS', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExcptionResult<TicketingTaskModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
}
