import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { UniversalActionModel } from '../../models/dto/core-main/universalActionModel';
import { CheckStatusActionModel } from '../../models/dto/hyperShop/checkStatusActionModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { ApiServerBase } from '../base/apiServerBase.service';


@Injectable()
export class HyperShopService extends ApiServerBase {
  getModuleControllerUrl(): string {
    return 'HyperShop';
  }
  ServiceUniversalAction(model: UniversalActionModel): Observable<ErrorExceptionResult<UniversalActionModel>> {
    if (model == null) {
      model = new UniversalActionModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/UniversalAction', model, {
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
  ServiceCheckStatus(): Observable<ErrorExceptionResult<CheckStatusActionModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/CheckStatus', {
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
