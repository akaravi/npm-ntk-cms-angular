import { BankPaymentPublicConfigModel } from '../../models/entity/bankPayment/bankPaymentPublicConfigModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { BankPaymentPublicConfigAliasJsonModel } from '../../models/entity/bankPayment/bankPaymentPublicConfigAliasJsonModel';


@Injectable()
export class BankPaymentPublicConfigService
  extends ApiCmsServerBase<BankPaymentPublicConfigModel, number>
{
  getModuleCotrolerUrl(): string {
    return 'BankPaymentPublicConfig';
  }
  ServiceGetOneWithJsonFormatter(id: number): Observable<ErrorExceptionResult<BankPaymentPublicConfigAliasJsonModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetOneWithJsonFormatter/' + id, {
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
  ServiceAutoAdd(id: number): Observable<ErrorExceptionResult<BankPaymentPublicConfigModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/AutoAdd/', {
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
