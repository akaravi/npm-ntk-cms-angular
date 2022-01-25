import { TicketingFaqModel } from '../../models/entity/ticketing/ticketingFaqModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { Observable } from 'rxjs';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { map, retry } from 'rxjs/operators';


@Injectable()
export class TicketingFaqService extends ApiCmsServerBase<TicketingFaqModel, number>  {
  getModuleControllerUrl(): string {
    return 'TicketingFaq';
  }

  ServiceGetAllOrigin( model: FilterModel): Observable<ErrorExceptionResult<TicketingFaqModel>> {
    if (model == null) {
      model = new FilterModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllOrigin/', model, {
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
