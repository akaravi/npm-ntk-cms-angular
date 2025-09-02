import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { BankPaymentInjectPaymentGotoBankStep1CalculateModel } from '../../models/dto/bankPayment/bankPaymentInjectPaymentGotoBankStep1CalculateModel';
import { BankPaymentInjectPaymentGotoBankStep2LandingSitePageModel } from '../../models/dto/bankPayment/bankPaymentInjectPaymentGotoBankStep2LandingSitePageModel';
import { CoreModuleSiteUserCreditCalculateDtoModel } from '../../models/dto/core-module/coreModuleSiteUserCreditCalculateDtoModel';
import { CoreModuleSiteUserCreditChargeDirectDtoModel } from '../../models/dto/core-module/coreModuleSiteUserCreditChargeDirectDtoModel';
import { CoreModuleSiteUserCreditPaymentDtoModel } from '../../models/dto/core-module/coreModuleSiteUserCreditPaymentDtoModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreModuleSiteUserCreditModel } from '../../models/entity/core-module-main/coreModuleSiteUserCreditModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class CoreModuleSiteUserCreditService extends ApiCmsServerBase<
  CoreModuleSiteUserCreditModel,
  number,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'CoreModuleSiteUserCredit';
  }
  ServiceGetCredit(
    LinkModuleId: number | string
  ): Observable<ErrorExceptionResult<CoreModuleSiteUserCreditModel>> {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/GetCredit/' +
          LinkModuleId,
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        retry(this.configApiRetry),

        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        })
      );
  }
  ServiceGetAllCredit(): Observable<
    ErrorExceptionResult<CoreModuleSiteUserCreditModel>
  > {
    return this.http
      .get(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllCredit/',
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        retry(this.configApiRetry),

        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        })
      );
  }

  ServiceChargeDirect(
    model: CoreModuleSiteUserCreditChargeDirectDtoModel
  ): Observable<ErrorExceptionResult<CoreModuleSiteUserCreditModel>> {
    if (!model) {
      model = new CoreModuleSiteUserCreditChargeDirectDtoModel();
    }
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/ChargeDirect',
        model,
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        retry(this.configApiRetry),

        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        })
      );
  }
  ServiceOrderCalculate(
    model: CoreModuleSiteUserCreditCalculateDtoModel
  ): Observable<
    ErrorExceptionResult<BankPaymentInjectPaymentGotoBankStep1CalculateModel>
  > {
    if (!model) {
      model = new CoreModuleSiteUserCreditCalculateDtoModel();
    }
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/OrderCalculate',
        model,
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        retry(this.configApiRetry),

        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        })
      );
  }
  ServiceOrderPayment(
    model: CoreModuleSiteUserCreditPaymentDtoModel
  ): Observable<
    ErrorExceptionResult<BankPaymentInjectPaymentGotoBankStep2LandingSitePageModel>
  > {
    if (!model) {
      model = new CoreModuleSiteUserCreditPaymentDtoModel();
    }
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/OrderPayment',
        model,
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        retry(this.configApiRetry),

        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        })
      );
  }
}
