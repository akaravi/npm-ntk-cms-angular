import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreSiteCategoryCmsModuleModel } from '../../models/entity/coreMain/coreSiteCategoryCmsModuleModel';

export class CoreSiteCategoryModuleService extends ApiCmsServerBase<CoreSiteCategoryCmsModuleModel, number>  {

  getModuleCotrolerUrl(): string {
    return 'CoreSiteCategoryCmsModule';
  }
}
