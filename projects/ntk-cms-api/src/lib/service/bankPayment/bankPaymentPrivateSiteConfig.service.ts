import { Observable } from 'rxjs';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { catchError, map, retry } from 'rxjs/operators';
import { BankPaymentTransactionCheckResponceModel } from '../../models/dto/bankPayment/bankPaymentTransactionCheckResponceModel';
import { BankPaymentOnlineTransactionDtoModel } from '../../models/dto/bankPayment/bankPaymentOnlineTransactionDtoModel';
import { ErrorExcptionResult } from '../../models/entity/base/errorExcptionResult';
import { Injectable } from '@angular/core';


@Injectable()
export class BankPaymentPrivateSiteConfigService extends ApiCmsServerBase<any, number>  {
  getModuleCotrolerUrl(): string {
    return 'BankPaymentPrivateSiteConfig';
  }

  ServiceTestPay(
    model: BankPaymentOnlineTransactionDtoModel,
  ): Observable<ErrorExcptionResult<BankPaymentTransactionCheckResponceModel>> {
    if (model == null) {
      model = new BankPaymentOnlineTransactionDtoModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/TestPay', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExcptionResult<BankPaymentTransactionCheckResponceModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }

  ServiceGoToBankPaymentWebSite(
    model: BankPaymentOnlineTransactionDtoModel,
  ): Observable<ErrorExcptionResult<BankPaymentTransactionCheckResponceModel>> {
    if (model == null) {
      model = new BankPaymentOnlineTransactionDtoModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GoToBankPaymentWebSite', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExcptionResult<BankPaymentTransactionCheckResponceModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
}
