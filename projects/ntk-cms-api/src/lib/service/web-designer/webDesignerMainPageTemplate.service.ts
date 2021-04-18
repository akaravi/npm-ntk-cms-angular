import { Observable } from 'rxjs';
import { ErrorExceptionResult } from '../../models/entity/base/errorExceptionResult';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { map, retry } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { WebDesignerMainPageTemplateModel } from '../../models/entity/web-designer/webDesignerMainPageTemplateModel';

@Injectable()
export class WebDesignerMainPageTemplateService extends ApiCmsServerBase<WebDesignerMainPageTemplateModel, string>  {
  getModuleCotrolerUrl(): string {
    return 'WebDesignerMainPageTemplate';
  }

}
