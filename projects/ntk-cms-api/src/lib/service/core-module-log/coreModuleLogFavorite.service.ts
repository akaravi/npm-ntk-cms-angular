
import { CoreModuleLogFavoriteModel } from '../../models/entity/core-module-log/coreModuleLogFavoriteModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';


@Injectable()
export class CoreModuleLogFavoriteService extends ApiCmsServerBase<CoreModuleLogFavoriteModel, string>  {  getModuleCotrolerUrl(): string {
    return 'CoreModuleLogFavorite';
  }
}
