import { Observable } from 'rxjs';
import { ApiCmsServerBase } from '../_base/apiCmsServerBase.service';
import { ErrorExcptionResult } from '../../cmsModels/base/errorExcptionResult';
import { catchError, map, retry } from 'rxjs/operators';
import { BankPaymentTransactionMakerDtoModel } from '../../cmsDtoModels/bankPayment/bankPaymentTransactionMakerDtoModel';
import { BankPaymentTransactionCheckResponceModel } from '../../cmsDtoModels/bankPayment/bankPaymentTransactionCheckResponceModel';

export class BankPaymentPrivateSiteConfigService extends ApiCmsServerBase<any, number>  {
  getModuleCotrolerUrl(): string {
    return 'BankPaymentPrivateSiteConfig';
  }

  ServiceTestPay(
    model: BankPaymentTransactionMakerDtoModel,
  ): Observable<ErrorExcptionResult<BankPaymentTransactionCheckResponceModel>> {
    if (model == null) {
      model = new BankPaymentTransactionMakerDtoModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/TestPay', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        catchError(this.handleError),
        map((ret: ErrorExcptionResult<BankPaymentTransactionCheckResponceModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }

  ServiceGoToBankPaymentWebSite(
    model: BankPaymentTransactionMakerDtoModel,
  ): Observable<ErrorExcptionResult<BankPaymentTransactionCheckResponceModel>> {
    if (model == null) {
      model = new BankPaymentTransactionMakerDtoModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GoToBankPaymentWebSite', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        catchError(this.handleError),
        map((ret: ErrorExcptionResult<BankPaymentTransactionCheckResponceModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
}
