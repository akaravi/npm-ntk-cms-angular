import { Observable } from 'rxjs';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { retry, catchError, map } from 'rxjs/operators';
import { PollingOptionModel } from '../../models/entity/polling/PollingOptionModel';
import { ErrorExcptionResult } from '../../models/entity/base/errorExcptionResult';

export class PollingOptionService extends ApiCmsServerBase<PollingOptionModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'PollingOption';
  }
}
