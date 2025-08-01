import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';
import { FilterModel } from '../../models/entity/base/filterModel';
import { TicketingTaskModel } from '../../models/entity/ticketing/ticketingTaskModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { TicketingTaskDtoModel } from './../../models/dto/ticketing/ticketingTaskDtoModel';


@Injectable()
export class TicketingTaskService extends ApiCmsServerBase<TicketingTaskModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'TicketingTask';
  }

  ServiceContactUS(model: TicketingTaskDtoModel): Observable<ErrorExceptionResult<TicketingTaskModel>> {
    if (model == null) {
      model = new TicketingTaskDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/ContactUS', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceTaskReaded(id: number): Observable<ErrorExceptionResultBase> {

    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/TaskReaded/' + id, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceisClosed(id: number): Observable<ErrorExceptionResultBase> {

    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/isClosed/' + id, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
}
