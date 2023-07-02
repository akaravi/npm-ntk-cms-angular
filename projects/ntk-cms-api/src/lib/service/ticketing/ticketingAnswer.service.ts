import { TicketingAnswerModel } from '../../models/entity/ticketing/ticketingAnswerModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { Observable } from 'rxjs';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';
import { map, retry } from 'rxjs/operators';


@Injectable()
export class TicketingAnswerService extends ApiCmsServerBase<TicketingAnswerModel, number,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'TicketingAnswer';
  }
  ServiceAnswerReaded(id: number): Observable<ErrorExceptionResultBase> {

    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/AnswerReaded/' + id, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }

}
