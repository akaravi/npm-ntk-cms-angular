import { Observable } from 'rxjs';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { map, catchError, retry } from 'rxjs/operators';
import { ErrorExcptionResult } from '../../models/entity/base/errorExcptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreModuleSiteModel } from '../../models/entity/coreMain/coreModuleSiteModel';
import { Injectable } from '@angular/core';


@Injectable()
export class CoreModuleSiteService extends ApiCmsServerBase<CoreModuleSiteModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'CoreModuleSite';
  }

  ServiceConfigSite(model: CoreModuleSiteModel): Observable<ErrorExcptionResult<CoreModuleSiteModel>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/ConfigSite', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExcptionResult<CoreModuleSiteModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
  ServiceEditConfigSite(model: CoreModuleSiteModel): Observable<ErrorExcptionResult<CoreModuleSiteModel>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/EditConfigSite', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExcptionResult<CoreModuleSiteModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
  ServiceGetAllById(id: number, model: FilterModel): Observable<ErrorExcptionResult<CoreModuleSiteModel>> {
    if (model == null) {
      model = new FilterModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetAll/' + id, model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExcptionResult<CoreModuleSiteModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
}
