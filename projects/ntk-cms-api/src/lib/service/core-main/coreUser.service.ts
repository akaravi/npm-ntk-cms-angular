import { BehaviorSubject, Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreUserModel } from '../../models/entity/core-main/coreUserModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';
import { RessellerChartModel } from '../../models/dto/core-main/ressellerChartModel';

@Injectable()
export class CoreUserService extends ApiCmsServerBase<
  CoreUserModel,
  number,
  FilterModel
> {
  CurrentUser = new BehaviorSubject<CoreUserModel>(new CoreUserModel());
  CurrentUserObs = this.CurrentUser.asObservable();
  getModuleControllerUrl(): string {
    return 'CoreUser';
  }

  ServiceGetRessellerChart(
    linkUserId?: number
  ): Observable<ErrorExceptionResult<RessellerChartModel>> {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/GetRessellerChart/' +
          linkUserId,
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
  SetCurrentUser(model: CoreUserModel): any {
    if (model == null) {
      model = new CoreUserModel();
    }
    this.CurrentUser.next(model);
  }
  ServiceCurrectUser(): Observable<ErrorExceptionResult<CoreUserModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/CurrentUser', {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),

        map((ret: any) => {
          this.SetCurrentUser(ret.item);
          return ret;
        })
      );
  }
  ServiceGetGlobalToken(
    model: FilterModel
  ): Observable<ErrorExceptionResult<CoreUserModel>> {
    if (model == null) {
      model = new FilterModel();
    }
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/GetGlobalToken',
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
