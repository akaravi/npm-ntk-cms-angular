import {  Observable } from 'rxjs';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { catchError, map, retry } from 'rxjs/operators';
import { ErrorExcptionResult } from '../../models/entity/base/errorExcptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreSiteUserModel } from '../../models/entity/coreMain/coreSiteUserModel';

export class CoreSiteUserService extends ApiCmsServerBase<CoreSiteUserModel, number>  {

  getModuleCotrolerUrl(): string {
    return 'CoreSiteUser';
  }

  ServiceGetAllSiteUser(model: FilterModel): Observable<ErrorExcptionResult<CoreSiteUserModel>> {
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
        map((ret: ErrorExcptionResult<CoreSiteUserModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
  ServiceGetCurrentSiteUsers(): Observable<ErrorExcptionResult<CoreSiteUserModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetCurrentSiteUsers', {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        catchError(this.handleError),
        map((ret: ErrorExcptionResult<CoreSiteUserModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
}
