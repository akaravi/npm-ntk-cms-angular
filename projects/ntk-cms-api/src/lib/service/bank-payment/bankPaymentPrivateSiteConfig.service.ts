import { Observable } from 'rxjs';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { BankPaymentPrivateSiteConfigModel } from '../../models/entity/bank-payment/bankPaymentPrivateSiteConfigModel';
import { BankPaymentInjectOnlineTransactionDtoModel } from '../../models/dto/bankPayment/bankPaymentInjectOnlineTransactionDtoModel';
import { BankPaymentInjectPaymentGotoBankStep2LandingSitePageModel } from '../../models/dto/bankPayment/bankPaymentInjectPaymentGotoBankStep2LandingSitePageModel';
import { BankPaymentPrivateSiteConfigAliasJsonModel } from '../../models/entity/bank-payment/bankPaymentPrivateSiteConfigAliasJsonModel';


@Injectable()
export class BankPaymentPrivateSiteConfigService extends ApiCmsServerBase<BankPaymentPrivateSiteConfigModel, number,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'BankPaymentPrivateSiteConfig';
  }
  ServiceGetOneWithJsonFormatter(id: number): Observable<ErrorExceptionResult<BankPaymentPrivateSiteConfigAliasJsonModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetOneWithJsonFormatter/' + id, {
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
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/TestPay', model, {
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
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GoToBankPaymentWebSite', model, {
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
  ServicePaymentGatewayList():
   Observable<ErrorExceptionResult<BankPaymentPrivateSiteConfigModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/PaymentGatewayList',  {
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
  ServicePaymentGatewayCoreList():
  Observable<ErrorExceptionResult<BankPaymentPrivateSiteConfigModel>> {
   return this.http
     .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/PaymentGatewayCoreList',  {
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
