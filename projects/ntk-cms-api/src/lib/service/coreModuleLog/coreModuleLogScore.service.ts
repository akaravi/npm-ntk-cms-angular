
import { CoreModuleLogScoreModel } from '../../models/entity/coreModuleLog/coreModuleLogScoreModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


export class CoreModuleLogScoreService extends ApiCmsServerBase<CoreModuleLogScoreModel, string>  {

  getModuleCotrolerUrl(): string {
    return 'CoreModuleLogScore';
  }
}
