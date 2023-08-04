import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { InfoModelEnum } from '../../models/entity/base/infoModelEnum';
import { ApiServerBase } from '../base/apiServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class TicketingEnumService extends ApiServerBase {
  getModuleControllerUrl(): string {
    return 'ticketingEnum';
  }

  ServiceEnumTicketingDepartemenPriority(): Observable<ErrorExceptionResult<InfoModelEnum>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/TicketingDepartemenPriorityEnum', {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }

  ServiceEnumTicketStatus(): Observable<ErrorExceptionResult<InfoModelEnum>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/TicketStatusEnum', {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceEnumAnswerStatus(): Observable<ErrorExceptionResult<InfoModelEnum>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/AnswerStatusEnum', {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }

}
