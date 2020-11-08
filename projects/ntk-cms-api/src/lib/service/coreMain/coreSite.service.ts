import { Observable } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { ErrorExcptionResult } from '../../models/entity/base/errorExcptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreSiteAddFirstSiteDtoModel } from '../../models/dto/core/coreSiteAddFirstSiteDtoModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreSiteSearchModel } from '../../models/dto/core/coreSiteSearchModel';
import { DomainModel } from '../../models/dto/core/domainModel';
import { CoreSiteModel } from '../../models/entity/coreMain/coreSiteModel';

export class CoreSiteService extends ApiCmsServerBase<CoreSiteModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'CoreSite';
  }

  ServiceWebScreenshot(model: CoreSiteModel): Observable<ErrorExcptionResult<CoreSiteModel>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/WebScreenshot', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        catchError(this.handleError),
        map((ret: ErrorExcptionResult<CoreSiteModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
  ServiceAddFirstSite(model: CoreSiteAddFirstSiteDtoModel): Observable<ErrorExcptionResult<CoreSiteModel>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/AddFirstSite', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        catchError(this.handleError),
        map((ret: ErrorExcptionResult<CoreSiteModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
  ServiceGetAllWithAlias(model: FilterModel): Observable<ErrorExcptionResult<CoreSiteModel>> {
    if (model == null) {
      model = new FilterModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetAllWithAlias', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        catchError(this.handleError),
        map((ret: ErrorExcptionResult<CoreSiteModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
  ServiceGetAllChildWithAlias(model: FilterModel): Observable<ErrorExcptionResult<CoreSiteModel>> {
    if (model == null) {
      model = new FilterModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetAllChildWithAlias', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        catchError(this.handleError),
        map((ret: ErrorExcptionResult<CoreSiteModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
  ServiceSearchNew(model: FilterModel): Observable<ErrorExcptionResult<CoreSiteModel>> {
    if (model == null) {
      model = new FilterModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/SearchNew', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        catchError(this.handleError),
        map((ret: ErrorExcptionResult<CoreSiteModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
  ServiceSearch(model: CoreSiteSearchModel): Observable<ErrorExcptionResult<CoreSiteModel>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/Search', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        catchError(this.handleError),
        map((ret: ErrorExcptionResult<CoreSiteModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
  ServiceDomain(): Observable<ErrorExcptionResult<CoreSiteModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/Domain', {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        catchError(this.handleError),
        map((ret: ErrorExcptionResult<CoreSiteModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
  ServiceDomains(id: number): Observable<ErrorExcptionResult<DomainModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/Domains/' + id, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        catchError(this.handleError),
        map((ret: ErrorExcptionResult<DomainModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
}
