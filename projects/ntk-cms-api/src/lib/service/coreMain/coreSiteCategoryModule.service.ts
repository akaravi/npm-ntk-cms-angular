import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreSiteCategoryCmsModuleModel } from '../../models/entity/coreMain/coreSiteCategoryCmsModuleModel';
import { Injectable } from '@angular/core';


@Injectable()
export class CoreSiteCategoryModuleService extends ApiCmsServerBase<CoreSiteCategoryCmsModuleModel, number>  {

  getModuleCotrolerUrl(): string {
    return 'CoreSiteCategoryCmsModule';
  }
}
