import { Observable } from 'rxjs';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { retry, catchError, map } from 'rxjs/operators';
import { PollingVoteModel } from '../../models/entity/polling/pollingVoteModel';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { Injectable } from '@angular/core';


@Injectable()
export class PollingVoteService extends ApiCmsServerBase<PollingVoteModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'PollingVote';
  }
  ServiceAddBatch(model: PollingVoteModel[]): Observable<ErrorExceptionResult<PollingVoteModel>> {
    if (model == null) {
      model = [];
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleCotrolerUrl() + '/AddBatch', model, {
        headers: this.getHeaders(),
      })
      .pipe(
        retry(this.configApiRetry),
        // catchError(this.handleError)
        map((ret: any) => {
          return this.errorExceptionResultCheck(ret);
        }),
      );
  }
}
