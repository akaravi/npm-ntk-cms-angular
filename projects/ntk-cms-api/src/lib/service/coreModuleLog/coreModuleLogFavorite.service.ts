
import { CoreModuleLogFavoriteModel } from '../../models/entity/coreModuleLog/coreModuleLogFavoriteModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

export class CoreModuleLogFavoriteService extends ApiCmsServerBase<CoreModuleLogFavoriteModel, string>  {

  getModuleCotrolerUrl(): string {
    return 'CoreModuleLogFavorite';
  }
}
