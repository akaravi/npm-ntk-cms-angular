import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreModuleSiteModel } from '../../models/entity/core-main/coreModuleSiteModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class CoreModuleSiteService extends ApiCmsServerBase<
  CoreModuleSiteModel,
  number,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'CoreModuleSite';
  }

  ServiceConfigSite(
    model: CoreModuleSiteModel
  ): Observable<ErrorExceptionResult<CoreModuleSiteModel>> {
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/ConfigSite',
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
  ServiceEditConfigSite(
    model: CoreModuleSiteModel
  ): Observable<ErrorExceptionResult<CoreModuleSiteModel>> {
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/EditConfigSite',
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
  ServiceGetAllById(
    id: number,
    model: FilterModel
  ): Observable<ErrorExceptionResult<CoreModuleSiteModel>> {
    if (model == null) {
      model = new FilterModel();
    }

    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAll/' + id,
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
