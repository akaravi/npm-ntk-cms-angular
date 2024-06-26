import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { WebDesignerMainIntroModel } from '../../models/entity/web-designer/webDesignerMainIntroModel';
import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';


@Injectable()
export class WebDesignerMainIntroService extends ApiCmsServerBase<WebDesignerMainIntroModel, string, FilterModel> {
  getModuleControllerUrl(): string {
    return 'WebDesignerMainIntro';
  }

}
