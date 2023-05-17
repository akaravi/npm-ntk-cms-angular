
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstatePropertyHistoryModel } from '../../models/entity/estate/estatePropertyHistoryModel';
import { EstatePropertySearchDtoModel } from '../../models/dto/estate/estatePropertySearchDtoModel';
import { EstatePropertyHistorySearchDtoModel } from '../../models/dto/estate/estatePropertyHistorySearchDtoModel';
import { Observable, map, retry } from 'rxjs';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';

@Injectable()
export class EstatePropertyHistoryService extends ApiCmsServerBase<EstatePropertyHistoryModel, string>  {
  getModuleControllerUrl(): string {
    return 'EstatePropertyHistory';
  }
  ServiceGetAllWithFilterOnDate(model: EstatePropertyHistorySearchDtoModel): Observable<ErrorExceptionResult<EstatePropertyHistoryModel>> {
    if (model == null) {
      model = new EstatePropertyHistorySearchDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllWithFilterOnDate/' , model, {
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
