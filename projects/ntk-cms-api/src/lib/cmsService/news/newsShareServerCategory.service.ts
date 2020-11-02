import { ApiCmsServerBase } from '../_base/apiCmsServerBase.service';
import { ErrorExcptionResult } from '../../cmsModels/base/errorExcptionResult';
import { catchError, map, retry } from 'rxjs/operators';
import { FilterModel } from '../../cmsModels/base/filterModel';
import { Observable } from 'rxjs';


export class NewsShareServerCategoryService extends ApiCmsServerBase<any, number>  {
  

  getModuleCotrolerUrl(): string {
    return 'NewsShareServerCategory';
  }

  ServiceGetAllOtherSite(model: FilterModel): Observable<ErrorExcptionResult<any>> {
    if (model == null) {
      model = new FilterModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetAllOtherSite/', model, {
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
