
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreModuleSiteUserCreditModel } from '../../models/entity/core-module-main/coreModuleSiteUserCreditModel';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { map, retry } from 'rxjs/operators';


@Injectable()
export class CoreModuleSiteUserCreditService extends ApiCmsServerBase<CoreModuleSiteUserCreditModel, number>  {  getModuleControllerUrl(): string {
    return 'CoreModuleSiteUserCredit';
  }
  ServiceGetCredit(LinkModuleId: number): Observable<ErrorExceptionResult<CoreModuleSiteUserCreditModel>> {
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
