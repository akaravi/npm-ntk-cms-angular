import { TicketingDepartemenModel } from '../../models/entity/ticketing/ticketingDepartemenModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { TicketingFaqModel } from '../../models/entity/ticketing/ticketingFaqModel';
import { Observable } from 'rxjs';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { map, retry } from 'rxjs/operators';



@Injectable()
export class TicketingDepartemenService extends ApiCmsServerBase<TicketingDepartemenModel, number,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'TicketingDepartemen';
  }
  ServiceGetAllOrigin( model: FilterModel): Observable<ErrorExceptionResult<TicketingDepartemenModel>> {
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
