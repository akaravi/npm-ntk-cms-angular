import { Observable } from 'rxjs';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { catchError, map, retry } from 'rxjs/operators';
import { BankPaymentTransactionCheckResponceModel } from '../../models/dto/bankPayment/bankPaymentTransactionCheckResponceModel';
import { BankPaymentTransactionMakerDtoModel } from '../../models/dto/bankPayment/bankPaymentTransactionMakerDtoModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { Injectable } from '@angular/core';
import { BankPaymentPrivateSiteConfigModel } from '../../models/entity/bankPayment/bankPaymentPrivateSiteConfigModel';


@Injectable()
export class BankPaymentPrivateSiteConfigService extends ApiCmsServerBase<BankPaymentPrivateSiteConfigModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'BankPaymentPrivateSiteConfig';
  }

  ServiceTestPay(
    model: BankPaymentTransactionMakerDtoModel,
  ): Observable<ErrorExceptionResult<BankPaymentTransactionCheckResponceModel>> {
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
        map((ret: ErrorExceptionResult<BankPaymentTransactionCheckResponceModel>) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }

  ServiceGoToBankPaymentWebSite(
    model: BankPaymentTransactionMakerDtoModel,
  ): Observable<ErrorExceptionResult<BankPaymentTransactionCheckResponceModel>> {
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
        map((ret: ErrorExceptionResult<BankPaymentTransactionCheckResponceModel>) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
}
