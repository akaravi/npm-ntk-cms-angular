import {  Observable } from 'rxjs';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { retry, catchError, map } from 'rxjs/operators';
import { NewsCategoryModel } from '../../models/entity/news/newsCategoryModel';
import { ErrorExcptionResult } from '../../models/entity/base/errorExcptionResult';



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
        // catchError(this.handleError)
        map((ret: ErrorExcptionResult<NewsCategoryModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
}
