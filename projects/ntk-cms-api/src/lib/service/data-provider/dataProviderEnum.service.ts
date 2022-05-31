import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { EnumInfoModel } from '../../models/entity/base/enumInfoModel';
import { ApiServerBase } from '../base/apiServerBase.service';
import { Injectable } from '@angular/core';


@Injectable()
export class DataProviderEnumService extends ApiServerBase {
  getModuleControllerUrl(): string {
    return 'DataProviderEnum';
  }

  ServiceDataProviderClientConnectionTypeEnum(): Observable<ErrorExceptionResult<EnumInfoModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/DataProviderClientConnectionTypeEnum', {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
}