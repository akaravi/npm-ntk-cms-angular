import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { UniversalActionModel } from '../../models/dto/core/universalActionModel';
import { CheckStatusActionModel } from '../../models/dto/hyperShop/checkStatusActionModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { ApiServerBase } from '../base/apiServerBase.service';


@Injectable({
  providedIn: 'root',
})
export class HyperShopService extends ApiServerBase {
  getModuleCotrolerUrl(): string {
    return 'HyperShop';
  }
  ServiceUniversalAction(model: UniversalActionModel): Observable<ErrorExceptionResult<UniversalActionModel>> {
    if (model == null) {
      model = new UniversalActionModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/UniversalAction', model, {
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
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/CheckStatus', {
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
