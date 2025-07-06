import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { BankPaymentPublicConfigAliasJsonModel } from '../../models/entity/bank-payment/bankPaymentPublicConfigAliasJsonModel';
import { BankPaymentPublicConfigModel } from '../../models/entity/bank-payment/bankPaymentPublicConfigModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class BankPaymentPublicConfigService
  extends ApiCmsServerBase<BankPaymentPublicConfigModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'BankPaymentPublicConfig';
  }
  ServiceGetOneWithJsonFormatter(id: number): Observable<ErrorExceptionResult<BankPaymentPublicConfigAliasJsonModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetOneWithJsonFormatter/' + id, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceAutoAdd(): Observable<ErrorExceptionResult<BankPaymentPublicConfigModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/AutoAdd/', {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }

}
