import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { WebDesignerMainPageTemplateModel } from '../../models/entity/web-designer/webDesignerMainPageTemplateModel';

@Injectable()
export class WebDesignerMainPageTemplateService extends ApiCmsServerBase<WebDesignerMainPageTemplateModel, string,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'WebDesignerMainPageTemplate';
  }

}
