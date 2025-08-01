
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { BankPaymentInjectPaymentGotoBankStep1CalculateModel } from '../../models/dto/bankPayment/bankPaymentInjectPaymentGotoBankStep1CalculateModel';
import { BankPaymentInjectPaymentGotoBankStep2LandingSitePageModel } from '../../models/dto/bankPayment/bankPaymentInjectPaymentGotoBankStep2LandingSitePageModel';
import { DataProviderModuleCalculateDtoModel } from '../../models/dto/data-provider/dataProviderModuleCalculateDtoModel';
import { DataProviderModulePaymentDtoModel } from '../../models/dto/data-provider/dataProviderModulePaymentDtoModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { DataProviderTransactionModel } from '../../models/entity/data-provider/dataProviderTransactionModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class DataProviderTransactionService extends ApiCmsServerBase<DataProviderTransactionModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'DataProviderTransaction';
  }
  ServiceOrderCalculate(model: DataProviderModuleCalculateDtoModel):
    Observable<ErrorExceptionResult<BankPaymentInjectPaymentGotoBankStep1CalculateModel>> {
    if (!model) {
      model = new DataProviderModuleCalculateDtoModel();
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
  ServiceOrderPayment(model: DataProviderModulePaymentDtoModel):
    Observable<ErrorExceptionResult<BankPaymentInjectPaymentGotoBankStep2LandingSitePageModel>> {
    if (!model) {
      model = new DataProviderModulePaymentDtoModel();
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
