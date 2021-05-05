import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreSiteCategoryCmsModuleModel } from '../../models/entity/core-main/coreSiteCategoryCmsModuleModel';
import { Injectable } from '@angular/core';


@Injectable()
export class CoreSiteCategoryCmsModuleService extends ApiCmsServerBase<CoreSiteCategoryCmsModuleModel, number>  {  getModuleCotrolerUrl(): string {
    return 'CoreSiteCategoryCmsModule';
  }
}
