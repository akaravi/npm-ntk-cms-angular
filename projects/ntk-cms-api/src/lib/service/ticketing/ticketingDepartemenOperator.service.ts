import { TicketingDepartemenOperatorModel } from '../../models/entity/ticketing/ticketingDepartemenOperatorModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { Observable } from 'rxjs';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { CoreUserModel } from '../../models/entity/core-main/coreUserModel';
import { map, retry } from 'rxjs/operators';


@Injectable()
export class TicketingDepartemenOperatorService extends ApiCmsServerBase<TicketingDepartemenOperatorModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'TicketingDepartemenOperator';
  }

  ServiceGetAllOperator(model: FilterModel): Observable<ErrorExceptionResult<CoreUserModel>> {
    // this.loadingStatus=true;
    if (model == null) {
      model = new FilterModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetAllOperator', model, {
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
