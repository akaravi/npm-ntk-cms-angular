import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { WebDesignerMainPageTemplateModel } from '../../models/entity/web-designer/webDesignerMainPageTemplateModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';

@Injectable()
export class WebDesignerMainPageTemplateService extends ApiCmsServerBase<WebDesignerMainPageTemplateModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'WebDesignerMainPageTemplate';
  }

}
