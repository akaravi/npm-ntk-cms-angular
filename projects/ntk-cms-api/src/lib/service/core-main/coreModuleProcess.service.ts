import { Observable } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreModuleProcessModel } from '../../models/entity/core-main/coreModuleProcessModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';


@Injectable()
export class CoreModuleProcessService extends ApiCmsServerBase<CoreModuleProcessModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'CoreModuleProcess';
  }

  ServiceAutoAdd(): Observable<ErrorExceptionResult<CoreModuleProcessModel>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/AutoAdd/', {
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
  ServiceGetOneWithJsonFormatter(model: FilterModel): Observable<ErrorExceptionResult<CoreModuleProcessModel>> {
    if (model == null) {
      model = new FilterModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetOneWithJsonFormatter/', model, {
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

  ServiceGetAllWithJsonFormatter(model: FilterModel): Observable<ErrorExceptionResult<CoreModuleProcessModel>> {
    if (model == null) {
      model = new FilterModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetAllWithJsonFormatter/', model, {
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
