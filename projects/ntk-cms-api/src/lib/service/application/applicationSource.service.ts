import { Injectable } from '@angular/core';
import { catchError, map, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ApplicationSourceModel } from '../../models/entity/application/applicationSourceModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { ErrorExcptionResult } from '../../models/entity/base/errorExcptionResult';


@Injectable()
export class ApplicationSourceService extends ApiCmsServerBase<ApplicationSourceModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'ApplicationSource';
  }

  ServiceBuildApp(Id: number): Observable<ErrorExcptionResult<ApplicationSourceModel>> {
    return this.http
      .get(
        this.getBaseUrl() + this.getModuleCotrolerUrl() + '/buildApp/' + Id,
        {
          headers: this.getHeaders(),
        },
      )
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExcptionResult<ApplicationSourceModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
}
