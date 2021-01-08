
import {  Observable, BehaviorSubject } from 'rxjs';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { catchError, map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreUserModel } from '../../models/entity/coreMain/coreUserModel';

import { Injectable } from '@angular/core';


@Injectable()
export class CoreUserService extends ApiCmsServerBase<CoreUserModel, number>  {
  CurrentUser = new BehaviorSubject<CoreUserModel>(new CoreUserModel());
  CurrentUserObs = this.CurrentUser.asObservable();

  getModuleCotrolerUrl(): string {
    return 'CoreUser';
  }

  SetCurrentUser(model: CoreUserModel): any {
    if (model == null) {
      model = new CoreUserModel();
    }
    this.CurrentUser.next(model);
  }
  ServiceCurrectUser(): Observable<ErrorExceptionResult<CoreUserModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/CurrentUser', {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          this.SetCurrentUser(ret.Item);
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceGetGlobalToken(model: FilterModel): Observable<ErrorExceptionResult<CoreUserModel>> {
    if (model == null) {
      model = new FilterModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetGlobalToken', model, {
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
