import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { ErrorExcptionResult } from '../../models/base/errorExcptionResult';
import { catchError, map, retry } from 'rxjs/operators';
import { SearchTagModel } from '../../models/base/searchModel';
import { NewsContentTagModel } from '../../models/news/newsContentTagModel';
import { Observable } from 'rxjs';


export class NewsContentTagService extends ApiCmsServerBase<NewsContentTagModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'NewsContentTag';
  }

  ServiceSearchTag(model: SearchTagModel): Observable<ErrorExcptionResult<NewsContentTagModel>> {
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/SearchTag/', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        catchError(this.handleError),
        map((ret: ErrorExcptionResult<NewsContentTagModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
}
