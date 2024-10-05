
import { Injectable } from '@angular/core';
import { EstatePropertyHistoryModel } from '../../models/entity/estate/estatePropertyHistoryModel';
import { EstatePropertyHistoryFilterModel } from '../../models/filters/estate/estatePropertyHistoryFilterModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreUserModel } from '../../models/entity/core-main/coreUserModel';

@Injectable()
export class EstatePropertyHistoryService extends ApiCmsServerBase<EstatePropertyHistoryModel, string, EstatePropertyHistoryFilterModel> {
  getModuleControllerUrl(): string {
    return 'EstatePropertyHistory';
  }
  ServiceGetAllResponsibleUserId(id: string, model: FilterModel): Observable<ErrorExceptionResult<CoreUserModel>> {
    if (model == null) {
      model = new FilterModel();
    }
    if (!id || id.length <=0) {
      id = '';
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllResponsibleUserId/' + id, model, {
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
