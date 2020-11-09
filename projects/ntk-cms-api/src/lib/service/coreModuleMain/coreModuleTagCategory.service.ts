
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreModuleTagCategoryModel } from '../../models/entity/coreModuleMain/coreModuleTagCategoryModel';

export class CoreModuleTagCategoryService extends ApiCmsServerBase<CoreModuleTagCategoryModel, number>  {

  getModuleCotrolerUrl(): string {
    return 'CoreModuleTagCategory';
  }
}
