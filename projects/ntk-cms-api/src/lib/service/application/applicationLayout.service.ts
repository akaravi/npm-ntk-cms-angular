import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ApplicationLayoutModel } from '../../models/entity/application/applicationLayoutModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class ApplicationLayoutService extends ApiCmsServerBase<ApplicationLayoutModel, number, FilterModel> {
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
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
}
