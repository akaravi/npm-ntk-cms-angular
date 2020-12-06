
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreCpMainMenuModel } from '../../models/entity/coreMain/coreCpMainMenuModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

import { Injectable } from '@angular/core';


@Injectable()
export class CoreCpMainMenuService extends ApiCmsServerBase<CoreCpMainMenuModel, number>  {
  coreCpMainMenu = new BehaviorSubject<CoreCpMainMenuModel[]>(new Array<CoreCpMainMenuModel>());
  coreCpMainMenuObs = this.coreCpMainMenu.asObservable();

  getModuleCotrolerUrl(): string {
    return 'CoreCpMainMenu';
  }

  // SetCoreCpMainMenu(model: Array<CoreCpMainMenuModel>) {
  //   if (model == null) model = new Array<CoreCpMainMenuModel>();
  //   this.coreCpMainMenu.next(model);
  // }

  ServiceGetAllMenu(model: FilterModel): Observable<ErrorExceptionResult<CoreCpMainMenuModel>> {
    if (model == null) {
      model = new FilterModel();
    }
    model.RowPerPage = 200;
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetAllMenu', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExceptionResult<CoreCpMainMenuModel>) => {
          if (ret.Item != null) {
            this.coreCpMainMenu.next(ret.ListItems);
          }
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceEditStep(model: any): Observable<ErrorExceptionResultBase> {
    return this.http
      .put(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/EditStep', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExceptionResultBase) => {
          return this.errorExceptionResultBaseCheck(ret);
        }),
      );
  }
}
