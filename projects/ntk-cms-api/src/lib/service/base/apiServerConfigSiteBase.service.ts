import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { BaseModuleConfigAdminMainValuesModel } from '../../models/entity/base-config/baseModuleConfigAdminMainValuesModel';
import { BaseModuleConfigSiteAccessValuesModel } from '../../models/entity/base-config/baseModuleConfigSiteAccessValuesModel';
import { BaseModuleConfigSiteValuesModel } from '../../models/entity/base-config/baseModuleConfigSiteValuesModel';
import { BaseModuleSiteCheckSiteModel } from '../../models/entity/base-config/baseModuleSiteCheckSiteModel';
import { BaseModuleSiteCheckUserModel } from '../../models/entity/base-config/baseModuleSiteCheckUserModel';
import { BaseModuleSiteStorageValuesModel } from '../../models/entity/base-config/baseModuleSiteStorageValuesModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { ApiServerBase } from './apiServerBase.service';

export class ApiServerConfigSiteBase<
  TAdminMain extends BaseModuleConfigAdminMainValuesModel,
  TSiteConfig extends BaseModuleConfigSiteValuesModel,
  TSiteAccess extends BaseModuleConfigSiteAccessValuesModel,
  TSiteStorage extends BaseModuleSiteStorageValuesModel
> extends ApiServerBase {
  getModuleControllerUrl(): string {
    return 'Empty';
  }

  ServiceSiteConfigDefault(): Observable<ErrorExceptionResult<TSiteConfig>> {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          'Configuration/SiteConfigDefault',
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

  ServiceSiteConfigDefaultSave(
    model: TSiteConfig
  ): Observable<ErrorExceptionResult<TSiteConfig>> {
    return this.http
      .post(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          'Configuration/SiteConfigDefault',
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

  ServiceSiteStorage(
    id: number
  ): Observable<ErrorExceptionResult<TSiteStorage>> {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          'Configuration/SiteStorage/' +
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

  ServiceSiteStorageSave(
    Siteid: number,
    model: TSiteStorage
  ): Observable<ErrorExceptionResult<TSiteStorage>> {
    return this.http
      .post(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          'Configuration/SiteStorage/' +
          Siteid,
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

  ServiceSiteConfig(id: number): Observable<ErrorExceptionResult<TSiteConfig>> {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          'Configuration/SiteConfig/' +
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

  ServiceSiteConfigSave(
    Siteid: number,
    model: TSiteConfig
  ): Observable<ErrorExceptionResult<TSiteConfig>> {
    return this.http
      .post(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          'Configuration/SiteConfig/' +
          Siteid,
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

  ServiceSiteAccess(
    Siteid: number
  ): Observable<ErrorExceptionResult<TSiteAccess>> {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          'Configuration/SiteAccess/' +
          Siteid,
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

  ServiceSiteAccessSave(
    Siteid: number,
    model: TSiteAccess
  ): Observable<ErrorExceptionResult<TSiteAccess>> {
    return this.http
      .post(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          'Configuration/SiteAccess/' +
          Siteid,
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

  ServiceSiteAccessDefault(): Observable<ErrorExceptionResult<TSiteAccess>> {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          'Configuration/SiteAccessDefault/',
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

  ServiceSiteAccessDefaultSave(
    model: TSiteAccess
  ): Observable<ErrorExceptionResult<TSiteAccess>> {
    return this.http
      .post(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          'Configuration/SiteAccessDefault/',
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

  ServiceAdminMain(): Observable<ErrorExceptionResult<TAdminMain>> {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          'Configuration/AdminMain/',
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

  ServiceAdminMainSave(
    model: TAdminMain
  ): Observable<ErrorExceptionResult<TAdminMain>> {
    return this.http
      .post(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          'Configuration/AdminMain/',
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
  ServiceCheckSite(
    id: number = 0
  ): Observable<ErrorExceptionResult<BaseModuleSiteCheckSiteModel>> {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          'Configuration/CheckSite/' +
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
  ServiceCheckUser(
    id: number = 0
  ): Observable<ErrorExceptionResult<BaseModuleSiteCheckUserModel>> {
    return this.http
      .get(
        this.getBaseUrl() +
          this.getModuleControllerUrl() +
          'Configuration/CheckUser/' +
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
}
