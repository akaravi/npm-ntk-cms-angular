
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { EstateAdsTypeModel } from '../../models/entity/estate/estateAdsTypeModel';
import { FilterModel } from '../../models/entity/base/filterModel';
import { Observable } from 'rxjs';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { map, retry } from 'rxjs/operators';
import { BankPaymentInjectPaymentGotoBankStep1CalculateModel } from '../../models/dto/bankPayment/bankPaymentInjectPaymentGotoBankStep1CalculateModel';
import { BankPaymentInjectPaymentGotoBankStep2LandingSitePageModel } from '../../models/dto/bankPayment/bankPaymentInjectPaymentGotoBankStep2LandingSitePageModel';
import { EstateModuleSalePropertyAdsCalculateDtoModel } from '../../models/dto/estate/estateModuleSalePropertyAdsCalculateDtoModel';
import { EstateModuleSalePropertyAdsPaymentDtoModel } from '../../models/dto/estate/estateModuleSalePropertyAdsPaymentDtoModel';
import { EstatePropertyAdsModel } from '../../models/entity/estate/estatePropertyAdsModel';

@Injectable()
export class EstateAdsTypeService extends ApiCmsServerBase<EstateAdsTypeModel, string>  {
  getModuleCotrolerUrl(): string {
    return 'EstateAdsType';
  }
  ServiceGetAllSale(model: FilterModel): Observable<ErrorExceptionResult<EstateAdsTypeModel>> {
    if (!model) {
      model = new FilterModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetAllSale', model, {
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
  ServiceCheckUseAdsForProperty(AdsTypeId: string, id: string):
    Observable<ErrorExceptionResult<EstatePropertyAdsModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/CheckUseAdsForProperty/' + AdsTypeId + '/' + id, {
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
  ServiceCheckUseAdsForAccountAgency(AdsTypeId: string, id: string):
    Observable<ErrorExceptionResult<EstatePropertyAdsModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/CheckUseAdsForAccountAgency/' + AdsTypeId + '/' + id, {
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
