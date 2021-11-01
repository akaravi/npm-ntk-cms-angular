import { Observable } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreSiteAddFirstSiteDtoModel } from '../../models/dto/core/coreSiteAddFirstSiteDtoModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreSiteSearchModel } from '../../models/dto/core/coreSiteSearchModel';
import { DomainModel } from '../../models/dto/core/domainModel';
import { CoreSiteModel } from '../../models/entity/core-main/coreSiteModel';
import { Injectable } from '@angular/core';
import { ShareInfoModel } from '../../models/dto/core/shareInfoModel';
import { RessellerChartModel } from '../../models/dto/core/ressellerChartModel';


@Injectable()
export class CoreSiteService extends ApiCmsServerBase<CoreSiteModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'CoreSite';
  }
  ServiceWebScreenshot(model: CoreSiteModel): Observable<ErrorExceptionResult<CoreSiteModel>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/WebScreenshot', model, {
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
  ServiceGetRessellerChart(linkSiteId?: number): Observable<ErrorExceptionResult<RessellerChartModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetRessellerChart/' + linkSiteId, {
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
  ServiceCurrectSite(): Observable<ErrorExceptionResult<CoreSiteModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/CurrectSite', {
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
  ServiceAddFirstSite(model: CoreSiteAddFirstSiteDtoModel): Observable<ErrorExceptionResult<CoreSiteModel>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/AddFirstSite', model, {
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
  ServiceGetAllWithAlias(model: FilterModel): Observable<ErrorExceptionResult<CoreSiteModel>> {
    if (model == null) {
      model = new FilterModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetAllWithAlias', model, {
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
  ServiceGetAllChildWithAlias(model: FilterModel): Observable<ErrorExceptionResult<CoreSiteModel>> {
    if (model == null) {
      model = new FilterModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetAllChildWithAlias', model, {
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
  ServiceSearchNew(model: FilterModel): Observable<ErrorExceptionResult<CoreSiteModel>> {
    if (model == null) {
      model = new FilterModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/SearchNew', model, {
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
  ServiceSearch(model: CoreSiteSearchModel): Observable<ErrorExceptionResult<CoreSiteModel>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/Search', model, {
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
  ServiceGetCurrencyMaster(): Observable<ErrorExceptionResult<string>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetCurrencyMaster', {
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
  ServiceGetCurrencySite(): Observable<ErrorExceptionResult<string>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetCurrencySite', {
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
  ServiceGetShareInfo(): Observable<ErrorExceptionResult<ShareInfoModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetShareInfo', {
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
  ServiceGetCurrentDomain(): Observable<ErrorExceptionResult<string>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetCurrentDomain', {
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
  ServiceGetRegDomains(siteCategoryId: number): Observable<ErrorExceptionResult<string>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetRegDomains/' + siteCategoryId, {
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
