
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { BankPaymentInjectPaymentGotoBankStep1CalculateModel } from '../../models/dto/bankPayment/bankPaymentInjectPaymentGotoBankStep1CalculateModel';
import { BankPaymentInjectPaymentGotoBankStep2LandingSitePageModel } from '../../models/dto/bankPayment/bankPaymentInjectPaymentGotoBankStep2LandingSitePageModel';
import { CoreModuleSiteCreditCalculateDtoModel } from '../../models/dto/core-module/coreModuleSiteCreditCalculateDtoModel';
import { CoreModuleSiteCreditChargeDirectDtoModel } from '../../models/dto/core-module/coreModuleSiteCreditChargeDirectDtoModel';
import { CoreModuleSiteCreditPaymentDtoModel } from '../../models/dto/core-module/coreModuleSiteCreditPaymentDtoModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreModuleSiteCreditModel } from '../../models/entity/core-module-main/coreModuleSiteCreditModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class CoreModuleSiteCreditService extends ApiCmsServerBase<CoreModuleSiteCreditModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'CoreModuleSiteCredit';
  }
  ServiceGetCredit(LinkModuleId: number): Observable<ErrorExceptionResult<CoreModuleSiteCreditModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetCredit/' + LinkModuleId, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceGetAllCredit(): Observable<ErrorExceptionResult<CoreModuleSiteCreditModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllCredit/', {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceChargeDirect(model: CoreModuleSiteCreditChargeDirectDtoModel):
    Observable<ErrorExceptionResult<CoreModuleSiteCreditModel>> {
    if (!model) {
      model = new CoreModuleSiteCreditChargeDirectDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/ChargeDirect', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }

  ServiceOrderCalculate(model: CoreModuleSiteCreditCalculateDtoModel):
    Observable<ErrorExceptionResult<BankPaymentInjectPaymentGotoBankStep1CalculateModel>> {
    if (!model) {
      model = new CoreModuleSiteCreditCalculateDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/OrderCalculate', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }

  ServiceOrderPayment(model: CoreModuleSiteCreditPaymentDtoModel):
    Observable<ErrorExceptionResult<BankPaymentInjectPaymentGotoBankStep2LandingSitePageModel>> {
    if (!model) {
      model = new CoreModuleSiteCreditPaymentDtoModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/OrderPayment', model, {
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
