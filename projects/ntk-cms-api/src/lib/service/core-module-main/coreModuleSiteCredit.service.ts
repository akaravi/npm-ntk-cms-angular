
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreModuleSiteCreditModel } from '../../models/entity/core-module-main/coreModuleSiteCreditModel';
import { Injectable } from '@angular/core';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';


@Injectable()
export class CoreModuleSiteCreditService extends ApiCmsServerBase<CoreModuleSiteCreditModel, number>  {  getModuleControllerUrl(): string {
    return 'CoreModuleSiteCredit';
  }
  ServiceGetCredit(LinkModuleId: number): Observable<ErrorExceptionResult<CoreModuleSiteCreditModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetCredit/' + LinkModuleId, {
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
