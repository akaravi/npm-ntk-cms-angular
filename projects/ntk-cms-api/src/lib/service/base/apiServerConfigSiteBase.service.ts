import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ErrorExcptionResult } from '../../models/base/errorExcptionResult';
import { retry, catchError } from 'rxjs/operators';
import { ApiServerBase } from './apiServerBase.service';


export class ApiServerConfigSiteBase extends ApiServerBase  {



  getModuleCotrolerUrl(): string {
    return 'Empty';
  }

  ServiceSiteDefault<TOut>(): Observable<ErrorExcptionResult<any>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/SiteDefault', {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        catchError(this.handleError),
        map((ret: ErrorExcptionResult<TOut>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }

  ServiceSiteDefaultSave<TOut>(model: any): Observable<ErrorExcptionResult<any>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl(), model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        catchError(this.handleError),
        map((ret: ErrorExcptionResult<TOut>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }

  ServiceSiteStorage<TOut>(id: number): Observable<ErrorExcptionResult<any>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/SiteStorage/' + id, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        catchError(this.handleError),
        map((ret: ErrorExcptionResult<TOut>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }

  ServiceSiteStorageSave<TOut>(Siteid: number, model: any): Observable<ErrorExcptionResult<any>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/SiteStorage/' + Siteid, model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        catchError(this.handleError),
        map((ret: ErrorExcptionResult<TOut>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }

  ServiceSite<TOut>(id: number): Observable<ErrorExcptionResult<any>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/Site/' + id, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        catchError(this.handleError),
        map((ret: ErrorExcptionResult<TOut>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }

  ServiceSiteSave<TOut>(Siteid: number, model: any): Observable<ErrorExcptionResult<any>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/Site/' + Siteid, model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        catchError(this.handleError),
        map((ret: ErrorExcptionResult<TOut>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }

  ServiceSiteAccess<TOut>(Siteid: number): Observable<ErrorExcptionResult<any>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/SiteAccess/' + Siteid, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        catchError(this.handleError),
        map((ret: ErrorExcptionResult<TOut>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }

  ServiceSiteAccessSave<TOut>(Siteid: number, model: any): Observable<ErrorExcptionResult<any>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/SiteAccess/' + Siteid, model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        catchError(this.handleError),
        map((ret: ErrorExcptionResult<TOut>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }

  ServiceSiteAccessDefault<TOut>(Siteid: number): Observable<ErrorExcptionResult<any>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/SiteAccessDefault/' + Siteid, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        catchError(this.handleError),
        map((ret: ErrorExcptionResult<TOut>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }

  ServiceSiteAccessDefaultSave<TOut>(model: any): Observable<ErrorExcptionResult<any>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/SiteAccessDefault/', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        catchError(this.handleError),
        map((ret: ErrorExcptionResult<TOut>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }

  ServiceAdminMain<TOut>(): Observable<ErrorExcptionResult<any>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/AdminMain/', {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        catchError(this.handleError),
        map((ret: ErrorExcptionResult<TOut>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }

  ServiceAdminMainSave<TOut>(model: any): Observable<ErrorExcptionResult<any>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/AdminMain/', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        catchError(this.handleError),
        map((ret: ErrorExcptionResult<TOut>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
}
