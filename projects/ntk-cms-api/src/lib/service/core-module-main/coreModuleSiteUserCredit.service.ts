
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreModuleSiteUserCreditModel } from '../../models/entity/core-module-main/coreModuleSiteUserCreditModel';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { map, retry } from 'rxjs/operators';
import { CoreModuleSiteUserCreditCalculateDtoModel } from '../../models/dto/core-module/coreModuleSiteUserCreditCalculateDtoModel';
import { BankPaymentInjectPaymentGotoBankStep1CalculateModel } from '../../models/dto/bankPayment/bankPaymentInjectPaymentGotoBankStep1CalculateModel';
import { CoreModuleSiteUserCreditPaymentDtoModel } from '../../models/dto/core-module/coreModuleSiteUserCreditPaymentDtoModel';
import { BankPaymentInjectPaymentGotoBankStep2LandingSitePageModel } from '../../models/dto/bankPayment/bankPaymentInjectPaymentGotoBankStep2LandingSitePageModel';
import { CoreModuleSiteUserCreditDirectAddDtoModel } from '../../models/dto/core-module/coreModuleSiteUserCreditDirectAddDtoModel';



@Injectable()
export class CoreModuleSiteUserCreditService extends ApiCmsServerBase<CoreModuleSiteUserCreditModel, number>  {
    getModuleControllerUrl(): string {
      return 'CoreModuleSiteUserCredit';
    }
  ServiceGetCredit(LinkModuleId: number): Observable<ErrorExceptionResult<CoreModuleSiteUserCreditModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetCredit/' + LinkModuleId, {
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

  ServiceDirectAddCredit(model: CoreModuleSiteUserCreditDirectAddDtoModel):
    Observable<ErrorExceptionResult<CoreModuleSiteUserCreditModel>> {
    if (!model) {
      model = new CoreModuleSiteUserCreditDirectAddDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/DirectAddCredit', model, {
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
  ServiceOrderCalculate(model: CoreModuleSiteUserCreditCalculateDtoModel):
    Observable<ErrorExceptionResult<BankPaymentInjectPaymentGotoBankStep1CalculateModel>> {
    if (!model) {
      model = new CoreModuleSiteUserCreditCalculateDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/OrderCalculate', model, {
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
  ServiceOrderPayment(model: CoreModuleSiteUserCreditPaymentDtoModel):
    Observable<ErrorExceptionResult<BankPaymentInjectPaymentGotoBankStep2LandingSitePageModel>> {
    if (!model) {
      model = new CoreModuleSiteUserCreditPaymentDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/OrderPayment', model, {
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
