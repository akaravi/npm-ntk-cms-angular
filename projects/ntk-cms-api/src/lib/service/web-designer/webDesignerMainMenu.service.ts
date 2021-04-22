import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { WebDesignerMainMenuModel } from '../../models/entity/web-designer/webDesignerMainMenuModel';


@Injectable()
export class WebDesignerMainMenuService extends ApiCmsServerBase<WebDesignerMainMenuModel, string>  {
  getModuleCotrolerUrl(): string {
    return 'WebDesignerMainMenu';
  }

}
