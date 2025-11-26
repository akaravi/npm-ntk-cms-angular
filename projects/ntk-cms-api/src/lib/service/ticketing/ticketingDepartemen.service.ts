import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { TicketingDepartemenModel } from '../../models/entity/ticketing/ticketingDepartemenModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class TicketingDepartemenService extends ApiCmsServerBase<
  TicketingDepartemenModel,
  number,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'TicketingDepartemen';
  }
  ServiceGetAllOrigin(
    model: FilterModel
  ): Observable<ErrorExceptionResult<TicketingDepartemenModel>> {
    if (model == null) {
      model = new FilterModel();
    }
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllOrigin/',
        model,
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        retry(this.configApiRetry),

        map((ret: any) => {
          return ret;
        })
      );
  }
}
