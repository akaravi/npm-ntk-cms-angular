
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { EstateAdsTypeModel } from '../../models/entity/estate/estateAdsTypeModel';
import { EstatePropertyAdsModel } from '../../models/entity/estate/estatePropertyAdsModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class EstateAdsTypeService extends ApiCmsServerBase<EstateAdsTypeModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'EstateAdsType';
  }
  ServiceGetAllSale(model: FilterModel): Observable<ErrorExceptionResult<EstateAdsTypeModel>> {
    if (!model) {
      model = new FilterModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllSale', model, {
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
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/CheckUseAdsForProperty/' + AdsTypeId + '/' + id, {
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
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/CheckUseAdsForAccountAgency/' + AdsTypeId + '/' + id, {
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
