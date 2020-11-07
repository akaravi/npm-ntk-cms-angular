import { Observable } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { ErrorExcptionResult } from '../../models/entity/base/errorExcptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreModuleModel } from '../../models/entity/coreMain/coreModuleModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

export class CoreModuleService extends ApiCmsServerBase<CoreModuleModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'CoreModule';
  }

  ServiceAutoAdd(): Observable<ErrorExcptionResult<CoreModuleModel>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/AutoAdd/', {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        catchError(this.handleError),
        map((ret: ErrorExcptionResult<CoreModuleModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
  ServiceConfig(MoudleClassName: string): Observable<ErrorExcptionResult<CoreModuleModel>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/Config/', MoudleClassName, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        catchError(this.handleError),
        map((ret: ErrorExcptionResult<CoreModuleModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
  ServiceGetOneWithModuleConfig(model: FilterModel): Observable<ErrorExcptionResult<CoreModuleModel>> {
    if (model == null) {
      model = new FilterModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetOneWithModuleConfig/', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        catchError(this.handleError),
        map((ret: ErrorExcptionResult<CoreModuleModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
  ServiceGetViewModelWithModuleConfig(id: number): Observable<ErrorExcptionResult<CoreModuleModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetViewModelWithModuleConfig/' + id, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        catchError(this.handleError),
        map((ret: ErrorExcptionResult<CoreModuleModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
  ServiceGetAllModuleName(model: FilterModel): Observable<ErrorExcptionResult<CoreModuleModel>> {
    if (model == null) {
      model = new FilterModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetAllModuleName/', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        catchError(this.handleError),
        map((ret: ErrorExcptionResult<CoreModuleModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
  ServiceGetAllByCategorySiteId(
    CategorySiteId: number,
    model: FilterModel,
  ): Observable<ErrorExcptionResult<CoreModuleModel>> {
    if (model == null) {
      model = new FilterModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetAllByCategorySiteId/' + CategorySiteId, model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        catchError(this.handleError),
        map((ret: ErrorExcptionResult<CoreModuleModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
}
