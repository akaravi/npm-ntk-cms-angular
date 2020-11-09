
import { CoreLogErrorModel } from '../../models/entity/coreLog/coreLogErrorModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


export class CoreLogErrorService extends ApiCmsServerBase<CoreLogErrorModel, number>  {

  getModuleCotrolerUrl(): string {
    return 'CoreLogError';
  }
}
