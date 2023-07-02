
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreCpMainMenuModel } from '../../models/entity/core-main/coreCpMainMenuModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EditStepDtoModel } from '../../models/dto/core-main/editStepDtoModel';


@Injectable()
export class CoreCpMainMenuService extends ApiCmsServerBase<CoreCpMainMenuModel, number,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'CoreCpMainMenu';
  }
  ServiceGetAllTree(model: FilterModel): Observable<ErrorExceptionResult<CoreCpMainMenuModel>> {
    if (model == null) {
      model = new FilterModel();
    }
    model.rowPerPage = 200;
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllTree', model, {
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
    model.rowPerPage = 200;
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllMenu', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          // if (ret.item != null) {
          //   this.coreCpMainMenu.next(ret.listItems);
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
      .put(this.getBaseUrl() + this.getModuleControllerUrl() + '/EditStep', model, {
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
