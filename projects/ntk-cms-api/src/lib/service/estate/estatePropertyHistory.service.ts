
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { EstatePropertyHistoryModel } from '../../models/entity/estate/estatePropertyHistoryModel';
import { Observable, map, retry } from 'rxjs';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { EstatePropertyHistoryFilterModel } from '../../models/dto/estate/estatePropertyHistoryFilterModel';

@Injectable()
export class EstatePropertyHistoryService extends ApiCmsServerBase<EstatePropertyHistoryModel, string, EstatePropertyHistoryFilterModel>  {
  getModuleControllerUrl(): string {
    return 'EstatePropertyHistory';
  }
  ServiceGetAllWithFilterOnDate(model: EstatePropertyHistoryFilterModel): Observable<ErrorExceptionResult<EstatePropertyHistoryModel>> {
    if (model == null) {
      model = new EstatePropertyHistoryFilterModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllWithFilterOnDate/', model, {
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
