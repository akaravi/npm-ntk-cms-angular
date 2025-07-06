import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { TicketingFaqModel } from '../../models/entity/ticketing/ticketingFaqModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class TicketingFaqService extends ApiCmsServerBase<TicketingFaqModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'TicketingFaq';
  }

  ServiceGetAllOrigin(model: FilterModel): Observable<ErrorExceptionResult<TicketingFaqModel>> {
    if (model == null) {
      model = new FilterModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllOrigin/', model, {
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
