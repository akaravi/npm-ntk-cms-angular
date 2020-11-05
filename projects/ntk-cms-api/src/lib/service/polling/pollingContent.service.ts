import { Observable } from 'rxjs';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { retry, catchError, map } from 'rxjs/operators';
import { PollingContentModel } from '../../models/entity/polling/PollingContentModel';
import { ErrorExcptionResult } from '../../models/entity/base/errorExcptionResult';

export class PollingContentService extends ApiCmsServerBase<PollingContentModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'PollingContent';
  }
}
