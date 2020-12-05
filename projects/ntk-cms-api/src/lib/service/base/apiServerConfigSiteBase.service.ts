import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ApiServerBase } from './apiServerBase.service';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';


export class ApiServerConfigSiteBase extends ApiServerBase  {



  getModuleCotrolerUrl(): string {
    return 'Empty';
  }

  ServiceSiteDefault<TOut>(): Observable<ErrorExceptionResult<any>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/SiteDefault', {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExceptionResult<TOut>) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }

  ServiceSiteDefaultSave<TOut>(model: any): Observable<ErrorExceptionResult<any>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl(), model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExceptionResult<TOut>) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }

  ServiceSiteStorage<TOut>(id: number): Observable<ErrorExceptionResult<any>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/SiteStorage/' + id, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExceptionResult<TOut>) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }

  ServiceSiteStorageSave<TOut>(Siteid: number, model: any): Observable<ErrorExceptionResult<any>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/SiteStorage/' + Siteid, model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExceptionResult<TOut>) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }

  ServiceSite<TOut>(id: number): Observable<ErrorExceptionResult<any>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/Site/' + id, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExceptionResult<TOut>) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }

  ServiceSiteSave<TOut>(Siteid: number, model: any): Observable<ErrorExceptionResult<any>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/Site/' + Siteid, model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExceptionResult<TOut>) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }

  ServiceSiteAccess<TOut>(Siteid: number): Observable<ErrorExceptionResult<any>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/SiteAccess/' + Siteid, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExceptionResult<TOut>) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }

  ServiceSiteAccessSave<TOut>(Siteid: number, model: any): Observable<ErrorExceptionResult<any>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/SiteAccess/' + Siteid, model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExceptionResult<TOut>) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }

  ServiceSiteAccessDefault<TOut>(Siteid: number): Observable<ErrorExceptionResult<any>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/SiteAccessDefault/' + Siteid, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExceptionResult<TOut>) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }

  ServiceSiteAccessDefaultSave<TOut>(model: any): Observable<ErrorExceptionResult<any>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/SiteAccessDefault/', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExceptionResult<TOut>) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }

  ServiceAdminMain<TOut>(): Observable<ErrorExceptionResult<any>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/AdminMain/', {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExceptionResult<TOut>) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }

  ServiceAdminMainSave<TOut>(model: any): Observable<ErrorExceptionResult<any>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/AdminMain/', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExceptionResult<TOut>) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
}
