import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { WebDesignerMainPageTemplateSiteCategoryModel } from '../../models/entity/web-designer/webDesignerMainPageTemplateSiteCategoryModel';

@Injectable({
  providedIn: 'root',
})
export class WebDesignerMainPageTemplateSiteCategoryService extends ApiCmsServerBase<WebDesignerMainPageTemplateSiteCategoryModel, string>  {
  getModuleCotrolerUrl(): string {
    return 'WebDesignerMainPageTemplateSiteCategory';
  }

}
