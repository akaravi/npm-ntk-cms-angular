import { map } from 'rxjs/operators';
import { retry, catchError } from 'rxjs/operators';
import { ApiServerBase } from './apiServerBase.service';
import { Observable } from 'rxjs';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ErrorExceptionResultBase } from '../../models/entity/base/errorExceptionResultBase';

import { Injectable } from '@angular/core';


@Injectable()
export class ApiCmsServerBase<TModel, TKey> extends ApiServerBase  {
  ServiceViewModel(): Observable<ErrorExceptionResult<TModel>> {
    // this.loadingStatus=true;
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/ViewModel', {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }

  ServiceGetAll(model: FilterModel): Observable<ErrorExceptionResult<TModel>> {
    // this.loadingStatus=true;
    if (model == null) {
      model = new FilterModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/getAll', model, {
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

  ServiceGetOneById(id: TKey): Observable<ErrorExceptionResult<TModel>> {
    // this.loadingStatus=true;
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/' + id, {
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

  ServiceGetCount(model: FilterModel): Observable<ErrorExceptionResultBase> {
    // this.loadingStatus=true;
    if (model == null) {
      model = new FilterModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/Count', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultBaseCheck(ret);
        }),
      );
  }

  ServiceGetExist(model: FilterModel): Observable<ErrorExceptionResultBase> {
    // this.loadingStatus=true;
    if (model == null) {
      model = new FilterModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/exist', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultBaseCheck(ret);
        }),
      );
  }
  ServiceExportFile(model: FilterModel): Observable<ErrorExceptionResult<TModel>> {
    // this.loadingStatus=true;
    if (model == null) {
      model = new FilterModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/ExportFile', model, {
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
  ServiceAdd(model: TModel): Observable<ErrorExceptionResult<TModel>> {
    // this.loadingStatus=true;
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/', model, {
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

  ServiceEdit(model: TModel): Observable<ErrorExceptionResult<TModel>> {
    // this.loadingStatus=true;
    return this.http
      .put(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/', model, {
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

  ServiceDelete(id: TKey): Observable<ErrorExceptionResult<TModel>> {
    // this.loadingStatus=true;
    return this.http
      .delete(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/' + id, {
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
  ServiceDeleteList(ids: TKey[]): Observable<ErrorExceptionResult<TModel>> {
    // this.loadingStatus=true;
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/DeleteList', ids, {
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
  ServiceDeleteEntity(model: TModel): Observable<ErrorExceptionResult<TModel>> {
    // this.loadingStatus=true;
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/delete', model, {
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
