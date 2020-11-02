import { ApiCmsServerBase } from '../_base/apiCmsServerBase.service';
import { ErrorExcptionResult } from '../../cmsModels/base/errorExcptionResult';
import { catchError, map, retry } from 'rxjs/operators';
import { SearchTagModel } from '../../cmsModels/base/searchModel';
import { NewsContentTagModel } from '../../cmsModels/news/newsContentTagModel';
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
