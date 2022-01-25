import { Injectable } from '@angular/core';
import { catchError, map, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ApplicationSourceModel } from '../../models/entity/application/applicationSourceModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';


@Injectable()
export class ApplicationSourceService extends ApiCmsServerBase<ApplicationSourceModel, number>  {
  getModuleControllerUrl(): string {
    return 'ApplicationSource';
  }

  ServiceBuildApp(Id: number): Observable<ErrorExceptionResult<ApplicationSourceModel>> {
    return this.http
      .get(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/buildApp/' + Id,
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
