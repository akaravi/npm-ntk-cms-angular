import {  Observable } from 'rxjs';
import { ApiCmsServerBase } from '../_base/apiCmsServerBase.service';
import { retry, catchError, map } from 'rxjs/operators';
import { ErrorExcptionResult } from '../../cmsModels/base/errorExcptionResult';
import { NewsCategoryModel } from '../../cmsModels/news/newsCategoryModel';


export class NewsCategoryService extends ApiCmsServerBase<NewsCategoryModel, number>  {
  

  getModuleCotrolerUrl(): string {
    return 'NewsCategory';
  }

  ServiceMove(OldId: number, NewId: number): Observable<ErrorExcptionResult<NewsCategoryModel>> {
    return this.http
      .post(
        this.getBaseUrl() + this.getModuleCotrolerUrl() + '/Move',
        { Old: OldId, New: NewId },
        {
          headers: this.getHeaders(),
        },
      )
      .pipe(
        retry(this.configApiRetry),
        catchError(this.handleError),
        map((ret: ErrorExcptionResult<NewsCategoryModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
}
