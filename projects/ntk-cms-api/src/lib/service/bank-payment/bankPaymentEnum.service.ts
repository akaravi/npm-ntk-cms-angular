import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { EnumInfoModel } from '../../models/entity/base/enumInfoModel';
import { ApiServerBase } from '../base/apiServerBase.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class BankPaymentEnumService extends ApiServerBase {
  getModuleCotrolerUrl(): string {
    return 'BankPaymentEnum';
  }

  ServiceEnumTransactionRecordStatus(): Observable<ErrorExceptionResult<EnumInfoModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/EnumTransactionRecordStatus', {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
   ServiceEnumTransactionBankStatus(): Observable<ErrorExceptionResult<EnumInfoModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/EnumTransactionBankStatus', {
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
