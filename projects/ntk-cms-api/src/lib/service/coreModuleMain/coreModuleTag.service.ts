
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreModuleTagModel } from '../../models/entity/coreModuleMain/coreModuleTagModel';

export class CoreModuleTagService extends ApiCmsServerBase<CoreModuleTagModel, number>  {

  getModuleCotrolerUrl(): string {
    return 'CoreModuleTag';
  }
}
