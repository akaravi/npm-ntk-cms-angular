
import {  Observable, BehaviorSubject } from 'rxjs';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { catchError, map, retry } from 'rxjs/operators';
import { ErrorExcptionResult } from '../../models/entity/base/errorExcptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreUserModel } from '../../models/entity/coreMain/coreUserModel';


export class CoreUserService extends ApiCmsServerBase<CoreUserModel, number>  {
  CorrectUser = new BehaviorSubject<CoreUserModel>(new CoreUserModel());
  CorrectUserObs = this.CorrectUser.asObservable();

  getModuleCotrolerUrl(): string {
    return 'CoreUser';
  }

  SetCorrectUser(model: CoreUserModel): any {
    if (model == null) {
      model = new CoreUserModel();
    }
    this.CorrectUser.next(model);
  }
  ServiceCurrectUser(): Observable<ErrorExcptionResult<CoreUserModel>> {
    return this.http
      .get(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/CurrectUser', {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExcptionResult<CoreUserModel>) => {
          this.SetCorrectUser(ret.Item);
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
  ServiceGetGlobalToken(model: FilterModel): Observable<ErrorExcptionResult<CoreUserModel>> {
    if (model == null) {
      model = new FilterModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetGlobalToken', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExcptionResult<CoreUserModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
}
