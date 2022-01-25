import { catchError, map, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ApplicationLayoutModel } from '../../models/entity/application/applicationLayoutModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { FilterModel } from '../../models/entity/base/filterModel';
import { Injectable } from '@angular/core';


@Injectable()
export class ApplicationLayoutService extends ApiCmsServerBase<ApplicationLayoutModel, number>  {
  getModuleControllerUrl(): string {
    return 'ApplicationLayout';
  }
  ServiceGetOneWithJsonFormat(model: FilterModel): Observable<ErrorExceptionResult<ApplicationLayoutModel>> {
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/GetOneWithJsonFormat',
        model,
        {
          headers: this.getHeaders(),
        },
      )
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }


  ServiceGetAllWithJsonFormat(model: FilterModel): Observable<ErrorExceptionResult<ApplicationLayoutModel>> {
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllWithJsonFormat',
        model,
        {
          headers: this.getHeaders(),
        },
      )
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
}
