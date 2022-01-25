import { BankPaymentTransactionModel } from '../../models/entity/bank-payment/bankPaymentTransactionModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';


@Injectable()
export class BankPaymentTransactionService
  extends ApiCmsServerBase<BankPaymentTransactionModel, number>
   {
  getModuleControllerUrl(): string {
    return 'BankPaymentTransaction';
  }
  ServiceTransactionCheck(id: number): Observable<ErrorExceptionResult<BankPaymentTransactionModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/TransactionCheck/' + id, {
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
  ServiceGoToBank(id: number): string {
    return this.getBaseUrl()  + '/GoToBank/' + id;
  }
}
