import { Observable } from 'rxjs';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { Injectable } from '@angular/core';
import { BankPaymentPrivateSiteConfigModel } from '../../models/entity/bankPayment/bankPaymentPrivateSiteConfigModel';
import { BankPaymentInjectOnlineTransactionDtoModel } from '../../models/dto/bankPayment/bankPaymentInjectOnlineTransactionDtoModel';
import { BankPaymentInjectPaymentGotoBankStep2LandingSitePageModel } from '../../models/dto/bankPayment/bankPaymentInjectPaymentGotoBankStep2LandingSitePageModel';
import { BankPaymentPrivateSiteConfigAliasJsonModel } from '../../models/entity/bankPayment/bankPaymentPrivateSiteConfigAliasJsonModel';


@Injectable()
export class BankPaymentPrivateSiteConfigService extends ApiCmsServerBase<BankPaymentPrivateSiteConfigModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'BankPaymentPrivateSiteConfig';
  }
  ServiceGetOneWithJsonFormatter(id: number): Observable<ErrorExceptionResult<BankPaymentPrivateSiteConfigAliasJsonModel>> {
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

  ServiceTestPay(model: BankPaymentInjectOnlineTransactionDtoModel):
   Observable<ErrorExceptionResult<BankPaymentInjectPaymentGotoBankStep2LandingSitePageModel>> {
    if (model == null) {
      model = new BankPaymentInjectOnlineTransactionDtoModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/TestPay', model, {
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

  ServiceGoToBankPaymentWebSite(model: BankPaymentInjectOnlineTransactionDtoModel):
  Observable<ErrorExceptionResult<BankPaymentInjectPaymentGotoBankStep2LandingSitePageModel>>{
    if (model == null) {
      model = new BankPaymentInjectOnlineTransactionDtoModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GoToBankPaymentWebSite', model, {
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
