import {  Observable } from 'rxjs';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { map, catchError, retry } from 'rxjs/operators';
import { ErrorExcptionResult } from '../../models/entity/base/errorExcptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';

export class CoreModuleSiteService extends ApiCmsServerBase<any, number>  {


  getModuleCotrolerUrl(): string {
    return 'CoreModuleSite';
  }

  ServiceConfigSite(model: any): Observable<ErrorExcptionResult<any>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/ConfigSite', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        catchError(this.handleError),
        map((ret: ErrorExcptionResult<any>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
  ServiceEditConfigSite(model: any): Observable<ErrorExcptionResult<any>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/EditConfigSite', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        catchError(this.handleError),
        map((ret: ErrorExcptionResult<any>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
  ServiceGetAllById(id: number, model: FilterModel): Observable<ErrorExcptionResult<any>> {
    if (model == null) {
      model = new FilterModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetAll/' + id, model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        catchError(this.handleError),
        map((ret: ErrorExcptionResult<any>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
}
