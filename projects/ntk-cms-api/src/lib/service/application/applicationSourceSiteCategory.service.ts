import { Injectable } from '@angular/core';
import { ApplicationSourceSiteCategoryModel } from '../../models/entity/application/applicationSourceSiteCategoryModel';
import { FilterModel } from '../../models/entity/base/filterModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class ApplicationSourceSiteCategoryService extends ApiCmsServerBase<ApplicationSourceSiteCategoryModel, number, FilterModel> {
  getModuleControllerUrl(): string {
    return 'ApplicationSourceSiteCategory';
  }

}
