
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { ErrorExcptionResult } from '../../models/base/errorExcptionResult';
import { ErrorExcptionResultBase } from '../../models/base/errorExcptionResultBase';
import { FilterModel } from '../../models/base/filterModel';
import { CoreCpMainMenuModel } from '../../models/core/coreCpMainMenuModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


export class CoreCpMainMenuService extends ApiCmsServerBase<any, number>  {
  coreCpMainMenu = new BehaviorSubject<CoreCpMainMenuModel[]>(new Array<CoreCpMainMenuModel>());
  coreCpMainMenuObs = this.coreCpMainMenu.asObservable();

  getModuleCotrolerUrl(): string {
    return 'CoreCpMainMenu';
  }

  // SetCoreCpMainMenu(model: Array<CoreCpMainMenuModel>) {
  //   if (model == null) model = new Array<CoreCpMainMenuModel>();
  //   this.coreCpMainMenu.next(model);
  // }

  ServiceGetAllMenu(model: FilterModel): Observable<ErrorExcptionResult<CoreCpMainMenuModel>> {
    if (model == null) {
      model = new FilterModel();
    }
    model.RowPerPage = 200;
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetAllMenu', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        catchError(this.handleError),
        map((ret: ErrorExcptionResult<CoreCpMainMenuModel>) => {
          if (ret.Item != null) {
            this.coreCpMainMenu.next(ret.ListItems);
          }
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
  ServiceEditStep(model: any): Observable<ErrorExcptionResultBase> {
    return this.http
      .put(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/EditStep', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        catchError(this.handleError),
        map((ret: ErrorExcptionResultBase) => {
          return this.errorExcptionResultBaseCheck(ret);
        }),
      );
  }
}
