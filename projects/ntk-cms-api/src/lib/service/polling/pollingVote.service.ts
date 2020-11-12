import { Observable } from 'rxjs';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { retry, catchError, map } from 'rxjs/operators';
import { PollingVoteModel } from '../../models/entity/polling/PollingVoteModel';
import { ErrorExcptionResult } from '../../models/entity/base/errorExcptionResult';

export class PollingVoteService extends ApiCmsServerBase<PollingVoteModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'PollingVote';
  }
  ServiceAddBatch(
    model: PollingVoteModel,
  ): Observable<ErrorExcptionResult<PollingVoteModel>> {
    if (model == null) {
      model = new PollingVoteModel();
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/AddBatch', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: ErrorExcptionResult<PollingVoteModel>) => {
          return this.errorExcptionResultCheck(ret);
        }),
      );
  }
}
