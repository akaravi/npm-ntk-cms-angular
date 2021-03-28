import { Observable } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreLocationModel } from '../../models/entity/coreMain/coreLocationModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';


@Injectable()
export class CoreLocationService extends ApiCmsServerBase<CoreLocationModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'CoreLocation';
  }
  ServiceGetAllTree(model: FilterModel): Observable<ErrorExceptionResult<CoreLocationModel>> {
    if (model == null) {
      model = new FilterModel();
    }
    model.RowPerPage = 200;
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetAllTree', model, {
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
  ServiceGetAllProvinces(model: FilterModel): Observable<ErrorExceptionResult<CoreLocationModel>> {
    if (model == null) {
      model = new FilterModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetAllProvinces', model, {
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
  ServiceGetAllCities(model: FilterModel): Observable<ErrorExceptionResult<CoreLocationModel>> {
    if (model == null) {
      model = new FilterModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetAllCities', model, {
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
  ServiceGetAllNeighbourhoods(model: FilterModel): Observable<ErrorExceptionResult<CoreLocationModel>> {
    if (model == null) {
      model = new FilterModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetAllNeighbourhoods', model, {
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
