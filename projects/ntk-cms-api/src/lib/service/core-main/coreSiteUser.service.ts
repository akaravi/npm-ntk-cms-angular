import {  Observable } from 'rxjs';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { catchError, map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreSiteUserModel } from '../../models/entity/core-main/coreSiteUserModel';
import { Injectable } from '@angular/core';


@Injectable()
export class CoreSiteUserService extends ApiCmsServerBase<CoreSiteUserModel, number>  {  getModuleControllerUrl(): string {
    return 'CoreSiteUser';
  }

  ServiceGetAllSiteUser(model: FilterModel): Observable<ErrorExceptionResult<CoreSiteUserModel>> {
    if (model == null) {
      model = new FilterModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllSiteUser', model, {
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
  ServiceGetCurrentSiteUsers(): Observable<ErrorExceptionResult<CoreSiteUserModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetCurrentSiteUsers', {
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
