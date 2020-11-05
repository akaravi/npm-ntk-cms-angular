import { Observable } from 'rxjs';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { retry, catchError, map } from 'rxjs/operators';
import { PollingVoteModel } from '../../models/entity/polling/PollingVoteModel';
import { ErrorExcptionResult } from '../../models/entity/base/errorExcptionResult';

export class PollingVoteService extends ApiCmsServerBase<PollingVoteModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'PollingVote';
  }
}
