import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreLocationModel } from '../../models/entity/core-main/coreLocationModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class CoreLocationService extends ApiCmsServerBase<
  CoreLocationModel,
  number,
  FilterModel
> {
  getModuleControllerUrl(): string {
    return 'CoreLocation';
  }
  ServiceGetOneIncludeChild(
    id: number
  ): Observable<ErrorExceptionResult<CoreLocationModel>> {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/GetOneIncludeChild/' +
          id,
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        retry(this.configApiRetry),

        map((ret: any) => {
          return ret;
        })
      );
  }
  ServiceGetOneIncludeParent(
    id: number
  ): Observable<ErrorExceptionResult<CoreLocationModel>> {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/GetOneIncludeParent/' +
          id,
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        retry(this.configApiRetry),

        map((ret: any) => {
          return ret;
        })
      );
  }
  ServiceGetAllTree(
    model: FilterModel
  ): Observable<ErrorExceptionResult<CoreLocationModel>> {
    if (model == null) {
      model = new FilterModel();
    }
    model.rowPerPage = 200;
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllTree',
        model,
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        retry(this.configApiRetry),

        map((ret: any) => {
          return ret;
        })
      );
  }
  ServiceGetAllProvinces(
    model: FilterModel
  ): Observable<ErrorExceptionResult<CoreLocationModel>> {
    if (model == null) {
      model = new FilterModel();
    }

    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllProvinces',
        model,
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        retry(this.configApiRetry),

        map((ret: any) => {
          return ret;
        })
      );
  }
  ServiceGetAllCities(
    model: FilterModel
  ): Observable<ErrorExceptionResult<CoreLocationModel>> {
    if (model == null) {
      model = new FilterModel();
    }

    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllCities',
        model,
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        retry(this.configApiRetry),

        map((ret: any) => {
          return ret;
        })
      );
  }
  ServiceGetAllNeighbourhoods(
    model: FilterModel
  ): Observable<ErrorExceptionResult<CoreLocationModel>> {
    if (model == null) {
      model = new FilterModel();
    }

    return this.http
      .post(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          '/GetAllNeighbourhoods',
        model,
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        retry(this.configApiRetry),

        map((ret: any) => {
          return ret;
        })
      );
  }
  ServiceGetAllCountry(
    model: FilterModel
  ): Observable<ErrorExceptionResult<CoreLocationModel>> {
    if (model == null) {
      model = new FilterModel();
    }

    return this.http
      .post(
        this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllCountry',
        model,
        {
          headers: this.getHeaders(),
        }
      )
      .pipe(
        retry(this.configApiRetry),

        map((ret: any) => {
          return ret;
        })
      );
  }
}
