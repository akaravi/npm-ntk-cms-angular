import { Observable } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { ErrorExcptionResult } from '../../models/entity/base/errorExcptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreModuleProcessModel } from '../../models/entity/coreMain/coreModuleProcessModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

export class CoreModuleProcessService extends ApiCmsServerBase<CoreModuleProcessModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'CoreModuleProcess';
  }

  ServiceAutoAdd(): Observable<ErrorExcptionResult<CoreModuleProcessModel>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/AutoAdd/', {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExcptionResult<CoreModuleProcessModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
  ServiceGetOneWithJsonFormatter(model: FilterModel): Observable<ErrorExcptionResult<CoreModuleProcessModel>> {
    if (model == null) {
      model = new FilterModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetOneWithJsonFormatter/', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExcptionResult<CoreModuleProcessModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }

  ServiceGetAllWithJsonFormatter(model: FilterModel): Observable<ErrorExcptionResult<CoreModuleProcessModel>> {
    if (model == null) {
      model = new FilterModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetAllWithJsonFormatter/', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExcptionResult<CoreModuleProcessModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
}
