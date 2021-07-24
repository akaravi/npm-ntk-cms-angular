import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { WebDesignerMainIntroModel } from '../../models/entity/web-designer/webDesignerMainIntroModel';


@Injectable({
  providedIn: 'root',
})
export class WebDesignerMainIntroService extends ApiCmsServerBase<WebDesignerMainIntroModel, string>  {
  getModuleCotrolerUrl(): string {
    return 'WebDesignerMainIntro';
  }

}
