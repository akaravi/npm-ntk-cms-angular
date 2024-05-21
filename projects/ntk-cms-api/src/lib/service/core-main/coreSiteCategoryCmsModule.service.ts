import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreSiteCategoryCmsModuleModel } from '../../models/entity/core-main/coreSiteCategoryCmsModuleModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class CoreSiteCategoryCmsModuleService extends ApiCmsServerBase<CoreSiteCategoryCmsModuleModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'CoreSiteCategoryCmsModule';
  }
}
