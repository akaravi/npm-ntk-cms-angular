import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { CoreSiteCategoryModel } from '../../models/entity/core-main/coreSiteCategoryModel';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';


@Injectable()
export class CoreSiteCategoryService extends ApiCmsServerBase<CoreSiteCategoryModel, number,FilterModel>  {  getModuleControllerUrl(): string {
    return 'CoreSiteCategory';
  }
}
