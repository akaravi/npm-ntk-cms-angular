import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { CoreSiteCategoryModel } from '../../models/entity/core-main/coreSiteCategoryModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class CoreSiteCategoryService extends ApiCmsServerBase<CoreSiteCategoryModel, number, FilterModel> {
    getModuleControllerUrl(): string {
      return 'CoreSiteCategory';
    }
}
