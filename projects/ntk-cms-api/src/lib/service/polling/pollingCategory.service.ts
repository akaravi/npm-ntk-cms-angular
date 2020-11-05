import { Observable } from 'rxjs';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { retry, catchError, map } from 'rxjs/operators';
import { PollingCategoryModel } from '../../models/entity/polling/PollingCategoryModel';
import { ErrorExcptionResult } from '../../models/entity/base/errorExcptionResult';

export class PollingCategoryService extends ApiCmsServerBase<PollingCategoryModel, number>  {


  getModuleCotrolerUrl(): string {
    return 'PollingCategory';
  }
}
