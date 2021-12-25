import {  Observable } from 'rxjs';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { retry, catchError, map } from 'rxjs/operators';

import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';


import { Injectable } from '@angular/core';
import { UniversalMenuMenuItemModel } from '../../models/entity/universal-menu/universalMenuMenuItemModel';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';
import { EditStepDtoModel } from '../../models/dto/core/editStepDtoModel';


@Injectable()
export class UniversalMenuMenuItemService extends ApiCmsServerBase<UniversalMenuMenuItemModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'UniversalMenuMenuItem';
  }
  ServiceGetAllMenu(model: FilterModel): Observable<ErrorExceptionResult<UniversalMenuMenuItemModel>> {
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
        map((ret: any) => {
          // if (ret.Item != null) {
          //   this.coreCpMainMenu.next(ret.ListItems);
          // }
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceEditStep(model: EditStepDtoModel<number>): Observable<ErrorExceptionResultBase> {
    if (!model) {
      model = new EditStepDtoModel<number>();
    }
    return this.http
      .put(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/EditStep', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultBaseCheck(ret);
        }),
      );
  }
}
