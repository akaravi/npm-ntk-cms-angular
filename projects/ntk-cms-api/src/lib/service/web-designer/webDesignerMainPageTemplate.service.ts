import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { WebDesignerMainPageTemplateModel } from '../../models/entity/web-designer/webDesignerMainPageTemplateModel';

@Injectable()
export class WebDesignerMainPageTemplateService extends ApiCmsServerBase<WebDesignerMainPageTemplateModel, string>  {
  getModuleControllerUrl(): string {
    return 'WebDesignerMainPageTemplate';
  }

}
