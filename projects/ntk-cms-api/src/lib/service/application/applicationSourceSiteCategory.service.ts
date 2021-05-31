import { Injectable } from '@angular/core';
import { ApplicationSourceSiteCategoryModel } from '../../models/entity/application/applicationSourceSiteCategoryModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class ApplicationSourceSiteCategoryService extends ApiCmsServerBase<ApplicationSourceSiteCategoryModel, number>  {
  getModuleCotrolerUrl(): string {
    return 'ApplicationSourceSiteCategory';
  }

}
