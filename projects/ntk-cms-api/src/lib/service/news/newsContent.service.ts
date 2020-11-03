import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { FilterModel } from '../../models/base/filterModel';
import { ErrorExcptionResult } from '../../models/base/errorExcptionResult';
import { catchError, map, retry } from 'rxjs/operators';
import { NewsContentModel } from '../../models/news/newsContentModel';
import { Observable } from 'rxjs';

export class NewsContentService extends ApiCmsServerBase<NewsContentModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'NewsContent';
  }



  ServiceGetAllWithSimilarsId(Id: number, model: FilterModel): Observable<ErrorExcptionResult<NewsContentModel>> {
    if (model == null) {
      model = new FilterModel();
    }

    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/GetAllWithSimilarsId/' + Id, model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        catchError(this.handleError),
        map((ret: ErrorExcptionResult<NewsContentModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
}
