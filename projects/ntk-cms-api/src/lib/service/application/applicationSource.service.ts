import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ApplicationSourceModel } from '../../models/entity/application/applicationSourceModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class ApplicationSourceService extends ApiCmsServerBase<
  ApplicationSourceModel,
  number,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'ApplicationSource';
  }

  ServiceBuildApp(
    Id: number
  ): Observable<ErrorExceptionResult<ApplicationSourceModel>> {
    return this.http
      .get(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/buildApp/' + Id,
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
