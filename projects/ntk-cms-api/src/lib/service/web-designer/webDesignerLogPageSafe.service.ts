import { ApiCmsServerBase } from '../base/apiCmsServerBase.service';
import { Injectable } from '@angular/core';
import { WebDesignerLogPageSafeModel } from '../../models/entity/web-designer/webDesignerLogPageSafeModel';


@Injectable({
  providedIn: 'root',
})
export class WebDesignerLogPageSafeService extends ApiCmsServerBase<WebDesignerLogPageSafeModel, string>  {
  getModuleCotrolerUrl(): string {
    return 'WebDesignerLogPageSafe';
  }

}
