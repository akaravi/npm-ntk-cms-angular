import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { FilterModel } from '../../models/entity/base/filterModel';
import { PollingVoteModel } from '../../models/entity/polling/pollingVoteModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class PollingVoteService extends ApiCmsServerBase<PollingVoteModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'PollingVote';
  }
  ServiceAddBatch(model: PollingVoteModel[]): Observable<ErrorExceptionResult<PollingVoteModel>> {
    if (model == null) {
      model = [];
    }
    return this.http
      .post(this.getBaseUrl() + this.getModuleControllerUrl() + '/AddBatch', model, {
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
