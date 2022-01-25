import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreUserClaimContentModel } from '../../models/entity/core-main/coreUserClaimContentModel';
import { Injectable } from '@angular/core';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { Observable } from 'rxjs';
import { CoreUserClaimCheckDtoModel } from '../../models/dto/core/coreUserClaimCheckDtoModel';
import { CoreUserClaimCheckModel } from '../../models/dto/core/coreUserClaimCheckModel';
import { map, retry } from 'rxjs/operators';


@Injectable()
export class CoreUserClaimContentService extends ApiCmsServerBase<CoreUserClaimContentModel, number>  {  getModuleControllerUrl(): string {
    return 'CoreUserClaimContent';
  }
  ServiceClaimCheck(model: CoreUserClaimCheckDtoModel): Observable<ErrorExceptionResult<CoreUserClaimCheckModel>> {
    if (model == null) {
      model = new CoreUserClaimCheckDtoModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/ClaimCheck', model, {
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
  ServiceClaimCheckCurrent(): Observable<ErrorExceptionResult<CoreUserClaimCheckModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/ClaimCheck', {
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
