import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { EnumModel } from '../../models/entity/base/enumModel';
import { ApiServerBase } from '../base/apiServerBase.service';
import { Injectable } from '@angular/core';


@Injectable()
export class ticketingEnumService extends ApiServerBase {
  getModuleCotrolerUrl(): string {
    return 'ticketingEnum';
  }

  ServiceEnumTicketingDepartemenPriority(): Observable<ErrorExceptionResult<EnumModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/EnumTicketingDepartemenPriority', {
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
