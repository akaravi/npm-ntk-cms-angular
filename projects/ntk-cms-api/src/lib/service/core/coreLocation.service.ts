import {  Observable } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { ErrorExcptionResult } from '../../models/base/errorExcptionResult';
import { FilterModel } from '../../models/base/filterModel';
import { CoreLocationModel } from '../../models/core/coreLocationModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

export class CoreLocationService extends ApiCmsServerBase<CoreLocationModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'CoreLocation';
  }

  ServiceGetAllProvinces(model: FilterModel): Observable<ErrorExcptionResult<CoreLocationModel>> {
    if (model == null) {
      model = new FilterModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetAllProvinces', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        catchError(this.handleError),
        map((ret: ErrorExcptionResult<CoreLocationModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
  ServiceGetAllCities(model: FilterModel): Observable<ErrorExcptionResult<CoreLocationModel>> {
    if (model == null) {
      model = new FilterModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetAllCities', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        catchError(this.handleError),
        map((ret: ErrorExcptionResult<CoreLocationModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
  ServiceGetAllNeighbourhoods(model: FilterModel): Observable<ErrorExcptionResult<CoreLocationModel>> {
    if (model == null) {
      model = new FilterModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetAllNeighbourhoods', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        catchError(this.handleError),
        map((ret: ErrorExcptionResult<CoreLocationModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
}
