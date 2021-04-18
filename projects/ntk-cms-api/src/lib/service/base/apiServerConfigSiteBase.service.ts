import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ApiServerBase } from './apiServerBase.service';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { BaseModuleConfigAdminMainValuesModel } from '../../models/entity/base-config/baseModuleConfigAdminMainValuesModel';
import { BaseModuleSiteStorageValuesModel } from '../../models/entity/base-config/baseModuleSiteStorageValuesModel';
import { BaseModuleConfigSiteAccessValuesModel } from '../../models/entity/base-config/baseModuleConfigSiteAccessValuesModel';
import { BaseModuleConfigSiteValuesModel } from '../../models/entity/base-config/baseModuleConfigSiteValuesModel';


export class ApiServerConfigSiteBase<TAdminMain extends BaseModuleConfigAdminMainValuesModel,
 TSiteConfig extends BaseModuleConfigSiteValuesModel,
  TSiteAccess extends BaseModuleConfigSiteAccessValuesModel,
   TSiteStorage extends BaseModuleSiteStorageValuesModel> extends ApiServerBase{

  getModuleCotrolerUrl(): string {
    return 'Empty';
  }

  ServiceSiteConfigDefault(): Observable<ErrorExceptionResult<TSiteConfig>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + 'Configuration/SiteConfigDefault', {
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

  ServiceSiteConfigDefaultSave(model: TSiteConfig): Observable<ErrorExceptionResult<TSiteConfig>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + 'Configuration/SiteConfigDefault', model, {
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

  ServiceSiteStorage(id: number): Observable<ErrorExceptionResult<TSiteStorage>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + 'Configuration/SiteStorage/' + id, {
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

  ServiceSiteStorageSave(Siteid: number, model: TSiteStorage): Observable<ErrorExceptionResult<TSiteStorage>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + 'Configuration/SiteStorage/' + Siteid, model, {
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

  ServiceSiteConfig(id: number): Observable<ErrorExceptionResult<TSiteConfig>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + 'Configuration/SiteConfig/' + id, {
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

  ServiceSiteConfigSave(Siteid: number, model: TSiteConfig): Observable<ErrorExceptionResult<TSiteConfig>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + 'Configuration/SiteConfig/' + Siteid, model, {
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

  ServiceSiteAccess(Siteid: number): Observable<ErrorExceptionResult<TSiteAccess>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + 'Configuration/SiteAccess/' + Siteid, {
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

  ServiceSiteAccessSave(Siteid: number, model: TSiteAccess): Observable<ErrorExceptionResult<TSiteAccess>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + 'Configuration/SiteAccess/' + Siteid, model, {
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

  ServiceSiteAccessDefault(): Observable<ErrorExceptionResult<TSiteAccess>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + 'Configuration/SiteAccessDefault/' , {
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

  ServiceSiteAccessDefaultSave(model: TSiteAccess): Observable<ErrorExceptionResult<TSiteAccess>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + 'Configuration/SiteAccessDefault/', model, {
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

  ServiceAdminMain(): Observable<ErrorExceptionResult<TAdminMain>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + 'Configuration/AdminMain/', {
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

  ServiceAdminMainSave(model: TAdminMain): Observable<ErrorExceptionResult<TAdminMain>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + 'Configuration/AdminMain/', model, {
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
