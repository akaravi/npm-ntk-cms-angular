import { map } from 'rxjs/operators';
import { retry, catchError } from 'rxjs/operators';
import { ApiServerBase } from './apiServerBase.service';
import { Observable } from 'rxjs';
import { ErrorExcptionResult } from '../../models/entity/base/errorExcptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ErrorExcptionResultBase } from '../../models/entity/base/errorExcptionResultBase';

import { Injectable } from '@angular/core';


@Injectable()
export class ApiCmsServerBase<TOut, TKey> extends ApiServerBase  {
  ServiceViewModel(): Observable<ErrorExcptionResult<TOut>> {
    // this.loadingStatus=true;
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/ViewModel', {
        headers: this.getHeaders(),
      })
      .pipe(
        // catchError(this.handleError)
        map((ret: ErrorExcptionResult<TOut>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }

  ServiceGetAll(model: FilterModel): Observable<ErrorExcptionResult<TOut>> {
    // this.loadingStatus=true;
    if (model == null) {
      model = new FilterModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/getAll', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        // tap(_ => console.log("tap:1")),
        // debounceTime(200),
        // //switchMap(() => this._search()),
        // delay(200),

        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExcptionResult<TOut>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }

  ServiceGetOneById(id: TKey): Observable<ErrorExcptionResult<TOut>> {
    // this.loadingStatus=true;
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/' + id, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExcptionResult<TOut>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }

  ServiceGetCount(model: FilterModel): Observable<ErrorExcptionResultBase> {
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
        map((ret: ErrorExcptionResultBase) => {
          return this.errorExcptionResultBaseCheck(ret);
        }),
      );
  }

  ServiceGetExist(model: FilterModel): Observable<ErrorExcptionResultBase> {
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
        map((ret: ErrorExcptionResultBase) => {
          return this.errorExcptionResultBaseCheck(ret);
        }),
      );
  }
  ServiceExportFile(model: FilterModel): Observable<ErrorExcptionResult<TOut>> {
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
        map((ret: ErrorExcptionResult<TOut>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
  ServiceAdd(model: any): Observable<ErrorExcptionResult<TOut>> {
    // this.loadingStatus=true;
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExcptionResult<TOut>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }

  ServiceEdit(model: any): Observable<ErrorExcptionResult<TOut>> {
    // this.loadingStatus=true;
    return this.http
      .put(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExcptionResult<TOut>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }

  ServiceDelete(id: TKey): Observable<ErrorExcptionResult<TOut>> {
    // this.loadingStatus=true;
    return this.http
      .delete(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/' + id, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExcptionResult<TOut>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
  ServiceDeleteList(ids: TKey[]): Observable<ErrorExcptionResult<TOut>> {
    // this.loadingStatus=true;
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/DeleteList', ids, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExcptionResult<TOut>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
}
