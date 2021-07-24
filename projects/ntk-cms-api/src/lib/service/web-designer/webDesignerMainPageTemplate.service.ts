import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { WebDesignerMainPageTemplateModel } from '../../models/entity/web-designer/webDesignerMainPageTemplateModel';

@Injectable({
  providedIn: 'root',
})
export class WebDesignerMainPageTemplateService extends ApiCmsServerBase<WebDesignerMainPageTemplateModel, string>  {
  getModuleCotrolerUrl(): string {
    return 'WebDesignerMainPageTemplate';
  }

}
