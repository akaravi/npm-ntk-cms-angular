import {  Observable } from 'rxjs';
import { ApiCmsServerBase } from '../_base/apiCmsServerBase.service';
import { catchError, map, retry } from 'rxjs/operators';
import { ErrorExcptionResult } from '../../cmsModels/base/errorExcptionResult';
import { FilterModel } from '../../cmsModels/base/filterModel';

export class CoreSiteUserService extends ApiCmsServerBase<any, number>  {
  
  getModuleCotrolerUrl(): string {
    return 'CoreSiteUser';
  }

  ServiceGetAllSiteUser(model: FilterModel): Observable<ErrorExcptionResult<any>> {
    if (model == null) {
      model = new FilterModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetAllSiteUser', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        catchError(this.handleError),
        map((ret: ErrorExcptionResult<any>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
  ServiceGetCurrentSiteUsers(): Observable<ErrorExcptionResult<any>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetCurrentSiteUsers', {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        catchError(this.handleError),
        map((ret: ErrorExcptionResult<any>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
}
