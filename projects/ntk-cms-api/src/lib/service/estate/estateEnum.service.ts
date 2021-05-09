import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { EnumModel } from '../../models/entity/base/enumModel';
import { ApiServerBase } from '../base/apiServerBase.service';
import { Injectable } from '@angular/core';


@Injectable()
export class EstateEnumService extends ApiServerBase {
  getModuleCotrolerUrl(): string {
    return 'EstateEnum';
  }

  ServiceEnumInputDataType(): Observable<ErrorExceptionResult<EnumModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/EnumInputDataType', {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
   ServiceEnumUiPropertyDesign(): Observable<ErrorExceptionResult<EnumModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/EnumUiPropertyDesign', {
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
