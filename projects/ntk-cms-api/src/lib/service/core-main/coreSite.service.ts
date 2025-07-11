import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { CoreSiteAddFirstSiteDtoModel } from '../../models/dto/core-main/coreSiteAddFirstSiteDtoModel';
import { CoreSiteSearchModel } from '../../models/dto/core-main/coreSiteSearchModel';
import { ProcessModuleSiteDataInfoOutputModel } from '../../models/dto/core-main/processModuleSiteDataInfoOutputModel';
import { ProcessModuleSiteDataOptimazeOutputModel } from '../../models/dto/core-main/processModuleSiteDataOptimazeOutputModel';
import { RessellerChartModel } from '../../models/dto/core-main/ressellerChartModel';
import { ShareInfoModel } from '../../models/dto/core-main/shareInfoModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreSiteModel } from '../../models/entity/core-main/coreSiteModel';
import { CoreSiteSupportModel } from '../../models/entity/core-main/coreSiteSupportModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class CoreSiteService extends ApiCmsServerBase<CoreSiteModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'CoreSite';
  }

  ServiceModuleDataOptimaze(linkSiteId: number): Observable<ErrorExceptionResult<ProcessModuleSiteDataOptimazeOutputModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/DataOptimaze/' + linkSiteId, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceModuleDataInfo(linkSiteId: number): Observable<ErrorExceptionResult<ProcessModuleSiteDataInfoOutputModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/DataInfo/' + linkSiteId, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceWebScreenshot(model: CoreSiteModel): Observable<ErrorExceptionResult<CoreSiteModel>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/WebScreenshot', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceGetRessellerChart(linkSiteId?: number): Observable<ErrorExceptionResult<RessellerChartModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetRessellerChart/' + linkSiteId, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceCurrectSite(): Observable<ErrorExceptionResult<CoreSiteModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/CurrectSite', {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceMasterSiteInfo(linkSiteId: number): Observable<ErrorExceptionResult<CoreSiteModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/MasterSiteInfo/' + linkSiteId, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceSupportSite(): Observable<ErrorExceptionResult<CoreSiteSupportModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/SupportSite', {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceAddFirstSite(model: CoreSiteAddFirstSiteDtoModel): Observable<ErrorExceptionResult<CoreSiteModel>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/AddFirstSite', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
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
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllWithAlias', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
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
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetAllChildWithAlias', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
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
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/SearchNew', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceSearch(model: CoreSiteSearchModel): Observable<ErrorExceptionResult<CoreSiteModel>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/Search', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceGetCurrencyMaster(): Observable<ErrorExceptionResult<string>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetCurrencyMaster', {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceGetCurrencySite(): Observable<ErrorExceptionResult<string>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetCurrencySite', {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceGetShareInfo(): Observable<ErrorExceptionResult<ShareInfoModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetShareInfo', {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceGetCurrentDomain(): Observable<ErrorExceptionResult<string>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetCurrentDomain', {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
  ServiceGetRegDomains(siteCategoryId: number): Observable<ErrorExceptionResult<string>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleControllerUrl() + '/GetRegDomains/' + siteCategoryId, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
}
