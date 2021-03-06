
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreCpMainMenuModel } from '../../models/entity/core-main/coreCpMainMenuModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EditStepDtoModel } from '../../models/dto/core/editStepDtoModel';


@Injectable()
export class CoreCpMainMenuService extends ApiCmsServerBase<CoreCpMainMenuModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'CoreCpMainMenu';
  }
  ServiceGetAllTree(model: FilterModel): Observable<ErrorExceptionResult<CoreCpMainMenuModel>> {
    if (model == null) {
      model = new FilterModel();
    }
    model.RowPerPage = 200;
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetAllTree', model, {
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
