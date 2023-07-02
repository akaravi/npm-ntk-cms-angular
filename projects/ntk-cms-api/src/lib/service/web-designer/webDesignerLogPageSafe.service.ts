import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { FilterModel } from '../../models/entity/base/filterModel';
import { WebDesignerLogPageSafeModel } from '../../models/entity/web-designer/webDesignerLogPageSafeModel';


@Injectable()
export class WebDesignerLogPageSafeService extends ApiCmsServerBase<WebDesignerLogPageSafeModel, string,FilterModel>  {
  getModuleControllerUrl(): string {
    return 'WebDesignerLogPageSafe';
  }

}
