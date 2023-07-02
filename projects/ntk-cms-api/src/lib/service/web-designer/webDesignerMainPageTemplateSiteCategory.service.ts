import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { WebDesignerMainPageTemplateSiteCategoryModel }
  from '../../models/entity/web-designer/webDesignerMainPageTemplateSiteCategoryModel';

@Injectable()
export class WebDesignerMainPageTemplateSiteCategoryService
  extends ApiCmsServerBase<WebDesignerMainPageTemplateSiteCategoryModel, string,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'WebDesignerMainPageTemplateSiteCategory';
  }

}
