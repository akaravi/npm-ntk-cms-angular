import { Observable } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreModuleModel } from '../../models/entity/core-main/coreModuleModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';
import { EditStepDtoModel } from '../../models/dto/core/editStepDtoModel';


@Injectable()
export class CoreModuleService extends ApiCmsServerBase<CoreModuleModel, number>  {
  getModuleControllerUrl(): string {
    return 'CoreModule';
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
  ServiceAutoAdd(): Observable<ErrorExceptionResult<CoreModuleModel>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/AutoAdd/', {
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
  ServiceConfig(MoudleClassName: string): Observable<ErrorExceptionResult<CoreModuleModel>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/Config/', MoudleClassName, {
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
  ServiceGetOneWithModuleConfig(model: FilterModel): Observable<ErrorExceptionResult<CoreModuleModel>> {
    if (model == null) {
      model = new FilterModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetOneWithModuleConfig/', model, {
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
  ServiceGetViewModelWithModuleConfig(id: number): Observable<ErrorExceptionResult<CoreModuleModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetViewModelWithModuleConfig/' + id, {
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
  ServiceGetAllModuleName(model: FilterModel): Observable<ErrorExceptionResult<CoreModuleModel>> {
    if (model == null) {
      model = new FilterModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllModuleName/', model, {
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
  ServiceGetAllByCategorySiteId(
    CategorySiteId: number,
    model: FilterModel,
  ): Observable<ErrorExceptionResult<CoreModuleModel>> {
    if (model == null) {
      model = new FilterModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllByCategorySiteId/' + CategorySiteId, model, {
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
