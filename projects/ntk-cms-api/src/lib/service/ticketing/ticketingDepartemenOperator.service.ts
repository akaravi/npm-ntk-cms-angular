import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreUserModel } from '../../models/entity/core-main/coreUserModel';
import { TicketingDepartemenOperatorModel } from '../../models/entity/ticketing/ticketingDepartemenOperatorModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class TicketingDepartemenOperatorService extends ApiCmsServerBase<TicketingDepartemenOperatorModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'TicketingDepartemenOperator';
  }

  ServiceGetAllOperator(model: FilterModel): Observable<ErrorExceptionResult<CoreUserModel>> {
    // this.loadingStatus=true;
    if (model == null) {
      model = new FilterModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllOperator', model, {
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
