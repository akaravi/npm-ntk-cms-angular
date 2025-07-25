import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { BankPaymentTransactionModel } from '../../models/entity/bank-payment/bankPaymentTransactionModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class BankPaymentTransactionService
  extends ApiCmsServerBase<BankPaymentTransactionModel, number, FilterModel> {
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
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }

}
