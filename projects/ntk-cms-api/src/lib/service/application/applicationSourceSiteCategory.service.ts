import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ApplicationSourceSiteCategoryModel } from '../../models/entity/application/applicationSourceSiteCategoryModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class ApplicationSourceSiteCategoryService extends ApiCmsServerBase<ApplicationSourceSiteCategoryModel, number,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'ApplicationSourceSiteCategory';
  }

}
