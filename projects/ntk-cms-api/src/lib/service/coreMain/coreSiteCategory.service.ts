import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreSiteCategoryModel } from '../../models/entity/coreMain/coreSiteCategoryModel';

export class CoreSiteCategoryService extends ApiCmsServerBase<CoreSiteCategoryModel, number>  {

  getModuleCotrolerUrl(): string {
    return 'CoreSiteCategory';
  }
}
